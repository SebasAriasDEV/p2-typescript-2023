import { Pokemon } from '../models/pokemon-model.js';

export const loadPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=5`;
  //   const url = 'https://pokeapi.co/api/v2/pokemon/1';
  const response = await fetch(url);
  const jsonData: { results: any[] } = await response.json();

  //   const { name, height, weight } = jsonData;
  //   console.log(name, height, weight);

  //   const pokemons:Array<Pokemon> = [];

  console.log(jsonData.results);
};
