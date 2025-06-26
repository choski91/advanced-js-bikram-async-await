// //DESARROLLA AQUI TUS SOLUCIONES

// //ejercicio1
async function getRandomPokemon() {
    try {
        const min = 1;
        const max = 1302;
        const pokemonAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();

        return data;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
// // getRandomPokemon()
// //     .then((data) => console.log(data))

// // //ejercicio 2
async function getImageAndName(pokemon) {
    try {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();

        let name = data.name;
        let img = data.sprites.front_default;

        return { name, img }

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
};

// //ejercicio 3
async function printImageAndName(pokemon) {
    try {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();

        let name = data.name;
        let img = data.sprites.front_default;

        return { name, img }
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
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
// .catch(error => {
//     console.error("Algo salió mal:", error.message);
// });

// // //ejercicio 4

async function getRandomDogImage() {
    try {

        let response = await fetch(`https://dog.ceo/api/breeds/image/random`)
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let perro = await response.json();
        let imgPerro = perro.message

        return imgPerro;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomDogImage()
    .then((imgPerro) => console.log(imgPerro))

// //ejercicio 5
async function getRandomPokemonImage() {
    try {
        const min = 1;
        const max = 1302;
        const pokemonAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonAleatorio}/`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();
        let urlAleatoria = data.sprites.front_default;

        return urlAleatoria;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
// getRandomPokemonImage()
//     .then((urlAleatoria) => console.log(urlAleatoria))
//     .catch(error => console.error("Algo salió mal:", error.message));

// //ejercicio 6
async function pokemonPikachu() {
    try {  
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }
        let data = await response.json();
        let img = data.sprites.front_default;
       return img;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
async function dogPug() {
    try {
        let responseDos = await fetch (`https://dog.ceo/api/breed/pug/images`);
                if (!responseDos.ok) {
            throw new Error(
                `Error HTTP: ${responseDos.status} - ${responseDos.statusText}`
            );
        }
        let dataUno = await responseDos.json();
        let todasLasImgPug = dataUno.message;

        return todasLasImgPug;
        } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }  

}
  async function printPugVsPikachu() {
    try {
          const [pikachuUrl, pugUrls] = await Promise.all([
            pokemonPikachu(), 
            dogPug()    
        ]);
        
        const segundaImgPug = pugUrls[5];
        console.log(segundaImgPug)
        
        const contenedor = document.getElementById("pikachu-pug");
                  contenedor.innerHTML = `
                <div class="imagen-item">
                 <img src="${pikachuUrl}" alt="Imagen de Pikachu">
                </div>
                <h2> vs </h2>
                <div class="imagen-item">
                <img src="${segundaImgPug}" alt="Imagen de un pug">
                </div>
            `;
      } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
  }
  printPugVsPikachu()



//ejercicio 7

async function getRandomCharacter() {
    try {
        const min = 1;
        const max = 826;
        const rickAndMortyAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

        let response = await fetch(`https://rickandmortyapi.com/api/character/${rickAndMortyAleatorio}`);
        if (!response.ok) {
            throw new Error(
                `Error HTTP: ${response.status} - ${response.statusText}`
            );
        }

        let data = await response.json();
        return data;


    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomCharacter()
.then((data) => console.log(data))
// .catch(error => console.error("Algo salió mal:", error.message));


//ejercicio 8
// async function getRandomCharacterInfo() {
    
// }

