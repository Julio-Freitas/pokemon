export type PokemonType = {
  slot: string;
  type: {
    name: string;
    url: string;
  };
};

type PokemonList = {
  name: string;
  url: string;
};

export type APIReponse = {
  id: number;
  name: string;
  species: PokemonList[];
  types: PokemonType[];
  sprites: {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
  };
};
