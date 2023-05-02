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

export const render = (pokemon: Pokemon) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    ${header()}
        <body>
          <div id="root"></div>
          <br /><br />

          <button onclick="history.back()" class="btn btn-primary"><< Go back</button>
          <script src="./dom/load-details.js"></script>
        </body>
    </html> 
  `;
};
