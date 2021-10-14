import { APIReponse } from './types';

const getUrl = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const getAllPokemon = async (): Promise<APIReponse[]> => {
  const promisesPokemons = Array(150)
    .fill('')
    .map(async (_, pokemonId) => {
      const resultSingle = await fetch(getUrl(pokemonId + 1));
      return await resultSingle.json();
    });

  const pokemonResult = await Promise.all(promisesPokemons);
  return pokemonResult;
};

export default getAllPokemon;
