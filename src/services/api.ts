export const FULL_POKEMON_API = "https://gamepress.gg/sites/default/files/aggregatedjson/pokemon-data-full-en-PoGO.json";

export const getAllPokemons = async (page: number = 1): Promise<any> => {
  const response = await fetch(FULL_POKEMON_API);
  const json = await response.json();

  return json;
}
