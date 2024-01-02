const POKEMON_API = 'https://pokeapi.co/api/v2/';
const POKEMON1_API = POKEMON_API + "pokemon?limit=30&offset=30"
const POKEMON2_API = 'https://pokeapi.co/api/v2/ability';

export async function getPokemonList() {
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
  // let img = new Image();
  // let serializer = new XMLSerializer();
  // img.src = 'data:image/svg+xml;base64,'+window.btoa(svgStr);

  // return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  // return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
}
