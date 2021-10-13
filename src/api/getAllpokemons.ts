import { APIReponse } from './types';

const getUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const getAllPokemon = async (): Promise<APIReponse[]> => {
  const result = [];

  for (let pokemon = 1; pokemon <= 150; pokemon++) {
    const resultFetch = await fetch(getUrl(pokemon));
    result.push(await resultFetch.json());
  }

  const pokemonResult = await Promise.all(result);
  return pokemonResult;
};

export default getAllPokemon;
