import listpokemonView from './view/listpokemonView';
const elPokemon = document.querySelector(
  '[data-js="listPokemon"]'
) as HTMLElement;
const elTitle = document.querySelector('h1.title') as HTMLTitleElement;

const effectCss = (text: string, el: HTMLTitleElement, speed = 100) => {
  const textToDigited = text;
  const splitText = textToDigited?.split('');
  el.innerHTML = ' ';
  splitText.forEach((chart, index) => {
    setTimeout(() => {
      el.innerHTML += `${chart}`;
    }, speed * index);
  });
};

const $html = (content: string): void => {
  if (elPokemon) {
    elPokemon.innerHTML = content;
  }
};

const initialize = async () => {
  const listResult = await listpokemonView();

  $html('<h1 class="loading">Carregando o conteudo...</h1>');
  effectCss('Lista de Pokemon', elTitle, 150);

  setTimeout((): void => $html(listResult), 150);
};

initialize();
