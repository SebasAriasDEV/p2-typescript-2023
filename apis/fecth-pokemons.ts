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

    const { id, base_experience, height, weight, sprites, stats } = jsonDetails;
    const pokemonImg = sprites.other.dream_world.front_default;

    //Destructure pokemon stats (from array)
    const [
      hpStats,
      attackStats,
      defenseStat,
      specialAttStats,
      specialDefStats,
      speedStats,
    ] = stats;

    pokemon.id = id;
    pokemon.experience = base_experience;
    pokemon.height = height;
    pokemon.weight = weight;
    pokemon.image = pokemonImg;
    pokemon.hpStats = hpStats.base_stat;
    pokemon.attackStats = attackStats.base_stat;
    pokemon.defenseStat = defenseStat.base_stat;
    pokemon.specialAttStats = specialAttStats.base_stat;
    pokemon.specialDefStats = specialDefStats.base_stat;
    pokemon.speedStats = speedStats.base_stat;

    pokemons.push(pokemon);
  }

  return pokemons;
};
