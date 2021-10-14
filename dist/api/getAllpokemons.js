"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
const getAllPokemon = async () => {
    const promisesPokemons = Array(150)
        .fill('')
        .map(async (_, pokemonId) => {
        const resultSingle = await fetch(getUrl(pokemonId + 1));
        return await resultSingle.json();
    });
    const pokemonResult = await Promise.all(promisesPokemons);
    return pokemonResult;
};
exports.default = getAllPokemon;
//# sourceMappingURL=getAllpokemons.js.map