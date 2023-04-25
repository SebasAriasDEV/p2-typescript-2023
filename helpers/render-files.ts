import { Pokemon } from '../models/pokemon-model.js';

const header = (): string => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemons API</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
`;

const renderUsers = (pokemons: Pokemon[]) => {
  let html = '';
  for (const pokemon of pokemons) {
    html += `
    <div class="col">
        <div class="card" style="width: 18rem">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <p class="card-text">
              Pokemon Description..
            </p>
            <a href="${pokemon.url}" class="btn btn-primary">More info</a>
          </div>
        </div>
    </div>
    `;
  }
  return html;
};

export const render = (pokemons: Pokemon[]) => {
  return `
<!DOCTYPE html>
<html lang="en">
    ${header()}
    <body>
    <div class="row">
        ${renderUsers(pokemons)}
    </div>
    </body>
</html>
`;
};
