import listpokemonView from './view/listpokemonView';
const elPokemon = document.querySelector(
  '[data-js="listPokemon"]'
) as HTMLElement;

const $html = (content: string): void => {
  if (elPokemon) {
    elPokemon.innerHTML = content;
  }
};

const initialize = async () => {
  const listResult = await listpokemonView();

  $html('<h1 class="loading">Carregando o conteudo...</h1>');

  setTimeout((): void => $html(listResult), 1000);
};

initialize();
