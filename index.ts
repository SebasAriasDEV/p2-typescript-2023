import { writeFile } from 'fs/promises';

import { loadPokemons } from './apis/fecth-pokemons.js';
import { render } from './helpers/render-files.js';
import { renderDetails } from './helpers/render-details.js';

const pokemons = await loadPokemons(50);
const indexHTML = render(pokemons);

//Render index HTML
try {
  await writeFile('pokemons.html', indexHTML);
} catch (error) {
  console.log(error);
}

//Render pokemon details
for (const pokemon of pokemons) {
  try {
    const detailsHTML = renderDetails(pokemon);
    await writeFile(`pokemon-details-${pokemon.name}.html`, detailsHTML);
  } catch (error) {
    console.log(error);
  }
}
