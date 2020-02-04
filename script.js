console.log("Hello")
const pokemonContainer = document.getElementById("pokemon-container");
console.log(pokemonContainer);

state = {
    all_pokemon: []
}

myLog = listOfPokemon => {
    state.all_pokemon = listOfPokemon;
    console.log(state.all_pokemon);    
}

createPokemonCard = pokemon => {
    let div = document.createElement("div");
    div.classList.add("pokemon-card");

    let h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Test"));
    
    div.appendChild(h1);
    pokemonContainer.appendChild(div);
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(listOfPokemon => myLog(listOfPokemon));

createPokemonCard();
createPokemonCard();
createPokemonCard();
createPokemonCard();