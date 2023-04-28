const fetchDetails = async (urlString) => {
  const response = await fetch(urlString);
  const jsonData = await response.json();

  const { id, name, stats, sprites } = jsonData;
  const pokemonImg = sprites.other.dream_world.front_default;
  const [
    hpStats,
    attackStats,
    defenseStat,
    specialAttStats,
    specialDefStats,
    speedStats,
  ] = stats;

  console.log(id, name, hpStats.base_stat, attackStats.base_stat);
  return {
    name,
    hpStats,
    attackStats,
    defenseStat,
    specialAttStats,
    specialDefStats,
    speedStats,
    pokemonImg,
  };
};

window.addEventListener('DOMContentLoaded', async () => {
  const currentUrl = localStorage.getItem('pokemonUrl');
  console.log('URL', currentUrl);
  const details = await fetchDetails(currentUrl);
  const htmlContent = renderDetailsHtml(details);
  document.querySelector('#root').innerHTML = htmlContent;
  console.log(details);
});

const renderDetailsHtml = ({
  name,
  hpStats,
  attackStats,
  defenseStat,
  specialAttStats,
  specialDefStats,
  speedStats,
  pokemonImg,
}) => {
  return `
    <h1>${name.toUpperCase()}</h1>
    <hr />

    <div class="row">
      <div class="col-3" style="text-align: center;">
        <img
          src="${pokemonImg}"
          />
      </div>

      <div class="col-9">
        <div class="row mb-3">
          <div class="col-4">
            <div class="stats-card ${hpStats.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Hp:</p>
              <p class="stat-number">${hpStats.base_stat}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${attackStats.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Attack:</p>
              <p class="stat-number">${attackStats.base_stat}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${defenseStat.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Defense:</p>
              <p class="stat-number">${defenseStat.base_stat}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="stats-card ${specialAttStats.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Special Attack:</p>
              <p class="stat-number">${specialAttStats.base_stat}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${specialDefStats.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Special Defense:</p>
              <p class="stat-number">${specialDefStats.base_stat}</p>
            </div>
          </div>
          <div class="col-4">
            <div class="stats-card ${speedStats.base_stat <= 50 ? 'bad-stat' :'good-stat'}">
              <p class="stat-title">Speed:</p>
              <p class="stat-number">${speedStats.base_stat}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
};
