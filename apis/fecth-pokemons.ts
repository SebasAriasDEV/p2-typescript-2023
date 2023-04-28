import { Pokemon } from '../models/pokemon-model.js';

export const loadPokemons = async (count: number): Promise<Pokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${count}`;
  //   const url = 'https://pokeapi.co/api/v2/pokemon/1';
  const response = await fetch(url);
  const jsonData: { results: Pokemon[] } = await response.json();

  const pokemons: Array<Pokemon> = [];
  for (const pokemon of jsonData.results) {
    //Get detailed information of each pokemon
    const detailsURL = pokemon.url;
    const responseDetails = await fetch(detailsURL);
    const jsonDetails: any = await responseDetails.json();

    const { id, base_experience, height, weight, sprites } = jsonDetails;
    const pokemonImg = sprites.other.dream_world.front_default;

    pokemon.id = id;
    pokemon.experience = base_experience;
    pokemon.height = height;
    pokemon.weight = weight;
    pokemon.image = pokemonImg;

    pokemons.push(pokemon);
  }

  return pokemons;
};
