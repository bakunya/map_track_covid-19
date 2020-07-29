import "../components/global-total.js";
const container = document.querySelector(".container-global");

const renderGlobal = (data) => {
  container.innerHTML = `<div class="flex-col">
    <div class="total bg-warning text-white"><h2>Cases</h2></div>
    <div class="flex-row bg-warning text-white">
    <h2>${data.TotalConfirmed}</h2>
    <img src="../src/img/sick.svg" />
    </div>
    <div class="total bg-info text-white font-weight-bold"><h2>Recovered</h2></div>
    <div class="flex-row bg-info text-white">
    <h2>${data.TotalRecovered}</h2>
    <img src="../src/img/happy.svg" />
    </div>
    <div class="total bg-danger text-white"><h2>Deaths</h2></div>
    <div class="flex-row bg-danger text-white">
    <h2>${data.TotalDeaths}</h2>
    <img src="../src/img/unhappy.svg" />
    </div>
</div>`;
};

const renderErrGlobal = (err) => {
  container.innerHTML = `<div style="padding:30px;"><h4 class="font-weight-bold text-center">Ups Something Wrong...</h4>
  <p class="text-center">${err.err}</p><div></div>`;
};

const loadGlobal = () => {
  container.innerHTML = `<h4 style="padding: 30px;" class="font-weight-bold text-center">Loading...</h4>`;
};
export { renderGlobal, renderErrGlobal, loadGlobal };
