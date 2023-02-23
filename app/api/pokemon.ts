export interface Pokemon {
  id: number;
  height: number;
  weight: number;
  name: string;
  sprites: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
}

export interface PokemonList {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
}

export async function getPokemon(id: number): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data: Pokemon = await response.json();

  return {
    id: data.id,
    height: data.height,
    name: data.name,
    weight: data.weight,
    sprites: data.sprites,
  };
}

export async function getPokemons(): Promise<PokemonList> {
  //TODO add pagination
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");

  return response.json();
}
