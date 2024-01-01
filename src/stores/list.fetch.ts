const POKEMON_API = 'https://pokeapi.co/api/v2/';
//
// export class ListFetch {
//
//   public async getPokemonList() {
//     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
//     const data = await response.json();
//
//     return data.results;
//   }
// }

export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await response.json();

  return data.results;
}

