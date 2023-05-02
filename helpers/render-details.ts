import { Pokemon } from '../models/pokemon-model.js';

const header = (): string => `
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pokemon Name</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
    <link href="./styles.css" rel="stylesheet" />
  </head>
`;

export const renderDetails = (pokemon: Pokemon) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    ${header()}
        <body>
          <div id="root">
          <h1>${pokemon.name.toUpperCase()}</h1>
    <hr />

    <div class="row">
      <div class="col-3" style="text-align: center;">
        <img
          src="${pokemon.image}"
          class="img-fluid w-100"
          />
      </div>

      <div class="col-9">
        <div class="row mb-3">
          <div class="col-4">
            <div class="stats-card ${
              pokemon.hpStats <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Hp:</p>
              <p class="stat-number">${pokemon.hpStats}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${
              pokemon.attackStats <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Attack:</p>
              <p class="stat-number">${pokemon.attackStats}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${
              pokemon.defenseStat <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Defense:</p>
              <p class="stat-number">${pokemon.defenseStat}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="stats-card ${
              pokemon.specialAttStats <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Special Attack:</p>
              <p class="stat-number">${pokemon.specialAttStats}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${
              pokemon.specialDefStats <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Special Defense:</p>
              <p class="stat-number">${pokemon.specialDefStats}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${
              pokemon.speedStats <= 50 ? 'bad-stat' : 'good-stat'
            }">
              <p class="stat-title">Speed:</p>
              <p class="stat-number">${pokemon.speedStats}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
          <br /><br />

          <button onclick="history.back()" class="btn btn-primary"><< Go back</button>
          <script src="./dom/load-details.js"></script>
        </body>
    </html> 
  `;
};
