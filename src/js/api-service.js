import axios from 'axios';


const BASE_URL = 'https://pokeapi.co/api/v2';

// function fetchPokemon(pokemonId) {
//     return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
//         response.json(),
//     );
// }

// export default { fetchPokemon };


//*   Ф-ция, которая делает HTTP-запрос на ресурс name 
//*  и возвращает промис с массивом стран по ID или Name:
function fetchCountries(name) {
    console.log(name);
    return axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then(response => {
            return response.data;
            // return response.json();
        })
}


export default { fetchCountries };