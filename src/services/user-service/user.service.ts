const POKEMON_API = 'https://pokeapi.co/api/v2/';

export async function getPokemonList({limit, offset}: {limit: number, offset: number} = {limit: 30, offset: 30}) {
    const response = await fetch(POKEMON_API + `pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    return data.results;
}

export async function getPokemonItem(name: string) {
    const response = await fetch(POKEMON_API + `pokemon/${name}`);
    const data = await response.json();

    return data;
}
