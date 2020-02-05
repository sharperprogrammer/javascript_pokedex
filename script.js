const pokemonContainer = document.getElementById("pokemon-container");
const searchBox = document.getElementById("search-box");

state = {
    all_pokemon: [],
    filteredPokemon: []
}

filterPokemon = (pokemon, index) => {
    if( pokemon.name.toLowerCase().includes(searchBox.value.toLowerCase()) ) {
        state.filteredPokemon[index] = pokemon;
        console.log(index, pokemon)
    }
}

searchChanged = () => {
    state.filteredPokemon = []
    state.all_pokemon.forEach(filterPokemon);
    redisplayPokemon();
}

searchBox.addEventListener("keyup", searchChanged);
searchBox.addEventListener("search", searchChanged);

createListOfPokemon = listOfPokemon => {
    for (i = 0; i < listOfPokemon.length; i++) {
        state.all_pokemon[i] = listOfPokemon[i];
        createPokemonCard(listOfPokemon[i]);
        state.all_pokemon[i].id = i + 1;
    }
}

redisplayPokemon = () => {
    while (pokemonContainer.firstChild) {
        pokemonContainer.removeChild(pokemonContainer.firstChild);
    }
    state.filteredPokemon.forEach(pokemon => 
        createPokemonCard(pokemon)
    )
}

createPokemonCard = pokemon => {
    let div = document.createElement("div");
    div.classList.add("pokemon-card");
    div.setAttribute("id", pokemon.name);

    let img = document.createElement("img");
    img.setAttribute("src", "images/" + pokemon.name + ".jpg");
    div.classList.add("image");

    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(pokemon.name));
    
    div.appendChild(img);
    div.appendChild(h1);
    pokemonContainer.appendChild(div);
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(listOfPokemon => createListOfPokemon(listOfPokemon.results));

