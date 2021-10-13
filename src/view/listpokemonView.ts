import getAllPokemon from '../api/getAllpokemons';

const listpokemonView = async (): Promise<string> => {
  const list = await getAllPokemon();
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

export default listpokemonView;
