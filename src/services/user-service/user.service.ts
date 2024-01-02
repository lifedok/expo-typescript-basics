const POKEMON_API = 'https://pokeapi.co/api/v2/';
const POKEMON1_API = POKEMON_API + "pokemon?limit=30&offset=30"
const POKEMON2_API = 'https://pokeapi.co/api/v2/ability';

export async function getPokemonList() {
    const response = await fetch(POKEMON2_API);
    const data = await response.json();

    return data.results;
}

export async function getPokemonItem(id: number) {
    const response = await fetch(POKEMON2_API);
    const data = await response.json();

    return data.results;
}

export async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
          .then(data => {
              resolve(data)
          })
    })
}

export function getPokemon({ url }) {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => res.json())
      .then(data => {
        resolve(data)
      })
  })
}

export function getPokemonImage(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}
