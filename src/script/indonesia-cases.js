import "../components/indonesia-cases-modal.js";
const modalIna = document.querySelector(".container-card");

const renderUiIna = (data) => {
  let card = "";
  data.map((d) => {
    card += showCards(d);
  });
  modalIna.innerHTML = card;
};

const renderErr = (err) => {
  modalIna.innerHTML = `<div style="padding:30px;"><h4 class="font-weight-bold text-center">Ups Something Wrong...</h4>
  <p class="text-center">${err.err}</p><div></div>`;
};

const loadIna = () => {
  modalIna.innerHTML = `<h4 style="padding: 30px;" class="font-weight-bold text-center">Loading...</h4>`;
};
const showCards = (data) => {
  const {
    Kode_Provi,
    Provinsi,
    Kasus_Meni,
    Kasus_Posi,
    Kasus_Semb,
  } = data.attributes;
  return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${Provinsi}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Kode Prov: ${Kode_Provi}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item flex-item"><span>Positif:</span> <span>${Kasus_Posi}</span></li>
          <li class="list-group-item flex-item"><span>Sembuh:</span> <span>${Kasus_Semb}</span></li>
          <li class="list-group-item flex-item"><span>Meninggal:</span> <span>${Kasus_Meni}</span></li>
        </ul>
      </div>
      </div>`;
};

export { renderUiIna, renderErr, loadIna };
