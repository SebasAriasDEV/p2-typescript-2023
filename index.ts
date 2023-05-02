import { writeFile } from 'fs/promises';

import { loadPokemons } from './apis/fecth-pokemons.js';
import { render } from './helpers/render-files.js';

const pokemons = await loadPokemons(50);
const indexHTML = render(pokemons);
try {
  await writeFile('pokemons.html', indexHTML);
} catch (error) {
  console.log(error);
}
