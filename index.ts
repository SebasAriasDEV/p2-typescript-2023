import { writeFile } from 'fs/promises';

import { loadPokemons } from './apis/fecth-pokemons.js';
import { render } from './helpers/render-files.js';

const pokemons = await loadPokemons(2);
const indexHTML = render(pokemons);
await writeFile('pokemons.html', indexHTML);