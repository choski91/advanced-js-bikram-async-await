//DESARROLLA AQUI TUS SOLUCIONES

//ejercicio1
async function getRandomPokemon() {
    const min = 1;
    const max = 1302;
    const pokemonAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`);
    let data = await response.json();
    return data;
}

getRandomPokemon()
    .then((data) => console.log(data))
    .catch((error) => console.log("hubo un error" + error));

//ejercicio 2
async function getImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }

}

//ejercicio 3    
async function printImageAndName(pokemon) {

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { name, img }
}
printImageAndName("bulbasaur")
    .then(pokemonData => {

        const pokemonName = pokemonData.name;
        const pokemonImageURL = pokemonData.img;
        const seccionPokemon = document.getElementById("pokemon");
        seccionPokemon.innerHTML =
            `<img src= "${pokemonImageURL}" alt= "${pokemonName}">
         <h1>${pokemonName}</h1>
         `;
    })
    .catch(error => {
        console.error("Algo salió mal:", error.message);
    });

