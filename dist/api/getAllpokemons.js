"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
const getAllPokemon = async () => {
    const result = [];
    for (let pokemon = 1; pokemon <= 150; pokemon++) {
        const resultFetch = await fetch(getUrl(pokemon));
        result.push(await resultFetch.json());
    }
    const pokemonResult = await Promise.all(result);
    return pokemonResult;
};
exports.default = getAllPokemon;
//# sourceMappingURL=getAllpokemons.js.map