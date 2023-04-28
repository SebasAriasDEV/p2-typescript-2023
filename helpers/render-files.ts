import { Pokemon } from '../models/pokemon-model.js';

const header = (): string => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokemons API</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="./styles.css" rel="stylesheet">
    </head>
`;

const renderUsers = (pokemons: Pokemon[]) => {
  let html = '';
  for (const pokemon of pokemons) {
    html += `
    <div class="col-4 mb-4">
        <div class="card p-2">
          <div class="row">
            <div class="col-4 d-flex">
              <img
                src="${pokemon.image}"
                class="card-img-top"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">${pokemon.name.toUpperCase()}</h5>
                <!-- <p class="card-text">Stats:</p> -->
                <ul>
                  <li>Experience: ${pokemon.experience}</li>
                  <li>Height: ${pokemon.height}</li>
                  <li>Weight: ${pokemon.weight}</li>
                </ul>
                <a
                  href="/pokemon-details.html"
                  class="btn btn-primary"
                  onclick="onSeeMore('${pokemon.url}')"
                  >See more</a
                >
              </div>
            </div>
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
    <h1>Pokemon API - Full Stack UPC</h1>
    <hr/>
    <div class="row">
        ${renderUsers(pokemons)}
    </div>
    <script src="./dom/see-details-button.js"></script>
    </body>
</html>
`;
};
