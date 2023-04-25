import { Pokemon } from '../models/pokemon-model.js';

export const loadPokemons = async (count:number): Promise<Pokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${count}`;
  //   const url = 'https://pokeapi.co/api/v2/pokemon/1';
  const response = await fetch(url);
  const jsonData: { results: Pokemon[] } = await response.json();

  const pokemons: Array<Pokemon> = [];
  for (const pokemon of jsonData.results) {
    pokemons.push(pokemon);
  }

  return pokemons;
};
