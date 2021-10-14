"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listpokemonView_1 = __importDefault(require("./view/listpokemonView"));
const elPokemon = document.querySelector('[data-js="listPokemon"]');
const elTitle = document.querySelector('h1.title');
const effectCss = (text, el, speed = 100) => {
    const textToDigited = text;
    const splitText = textToDigited === null || textToDigited === void 0 ? void 0 : textToDigited.split('');
    el.innerHTML = ' ';
    splitText.forEach((chart, index) => {
        setTimeout(() => {
            el.innerHTML += `${chart}`;
        }, speed * index);
    });
};
const $html = (content) => {
    if (elPokemon) {
        elPokemon.innerHTML = content;
    }
};
const initialize = async () => {
    const listResult = await (0, listpokemonView_1.default)();
    $html('<h1 class="loading">Carregando o conteudo...</h1>');
    effectCss('Lista de Pokemon', elTitle, 150);
    setTimeout(() => $html(listResult), 150);
};
initialize();
//# sourceMappingURL=index.js.map