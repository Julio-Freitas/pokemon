"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listpokemonView_1 = __importDefault(require("./view/listpokemonView"));
const elPokemon = document.querySelector('[data-js="listPokemon"]');
const $html = (content) => {
    if (elPokemon) {
        elPokemon.innerHTML = content;
    }
};
const initialize = async () => {
    const listResult = await (0, listpokemonView_1.default)();
    $html('<h1 class="loading">Carregando o conteudo...</h1>');
    setTimeout(() => $html(listResult), 1000);
};
initialize();
//# sourceMappingURL=index.js.map