"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllpokemons_1 = __importDefault(require("../api/getAllpokemons"));
const listpokemonView = async () => {
    const list = await (0, getAllpokemons_1.default)();
    return list.reduce((acc, pokemon) => {
        const { id, name, sprites } = pokemon;
        acc += `
      <li class="listpokemon__card-pokemon" data-info="${id}">
      <img src="${sprites.back_default}"  alt="${name}"/>
      <span class="listpokemon__card-pokemon__text">${name}</span>
      </li>
    `;
        return acc;
    }, '');
};
exports.default = listpokemonView;
//# sourceMappingURL=listpokemonView.js.map