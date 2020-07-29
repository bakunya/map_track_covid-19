import { renderUiIna, renderErr, loadIna } from "./indonesia-cases.js";
import { renderGlobal, renderErrGlobal, loadGlobal } from "./global-case";
import "../components/button-ina.js";
import "../components/button-global.js";

const btnGlobal = document.querySelector("button-global");
const btnIna = document.querySelector("button-ina");
const proxyUrl = {
  proxy: "https://cors-anywhere.herokuapp.com/",
  url: "https://api.kawalcorona.com/indonesia/provinsi",
};

const main = () => {
  const global = () => {
    if (sessionStorage.getItem("API")) {
      const data = JSON.parse(sessionStorage.getItem("API"));
      renderUiGlobal(data);
    } else if (sessionStorage.getItem("API_ERR")) {
      const err = JSON.parse(sessionStorage.getItem("API_ERR"));
      renderErrGlobal(err);
    } else {
      loadGlobal();
    }
  };

  const inaCase = () => {
    if (sessionStorage.getItem("INA")) {
      const data = JSON.parse(sessionStorage.getItem("INA"));
      renderIna(data);
    } else if (sessionStorage.getItem("INA_ERR")) {
      const err = JSON.parse(sessionStorage.getItem("INA_ERR"));
      renderErr(err);
    } else {
      loadIna();
    }
  };

  const renderUiGlobal = (data) => {
    renderGlobal(data);
  };

  const renderIna = (data) => {
    renderUiIna(data);
  };

  btnIna.event = inaCase;
  btnGlobal.event = global;
};

const apiGlobalSession = async () => {
  try {
    const getGlobal = await fetch("https://api.covid19api.com/world/total");
    const response = await getGlobal.json();
    if (!getGlobal.ok) {
      throw new Error(getGlobal.statusText);
    }
    sessionStorage.removeItem("API_ERR");
    sessionStorage.setItem("API", JSON.stringify(response));
  } catch (error) {
    console.log(error);
    sessionStorage.setItem("API_ERR", JSON.stringify({ err: `${error}` }));
  }
};

const apiInaSession = async () => {
  try {
    const getGlobal = await fetch(proxyUrl.proxy + proxyUrl.url);
    const response = await getGlobal.json();
    if (!getGlobal.ok) {
      throw new Error(getGlobal.statusText);
    }
    console.log(response);
    sessionStorage.removeItem("INA_ERR");
    sessionStorage.setItem("INA", JSON.stringify(response));
  } catch (error) {
    sessionStorage.setItem("INA_ERR", JSON.stringify({ err: `${error}` }));
  }
};

window.addEventListener("DOMContentLoaded", () => {
  apiGlobalSession();
  apiInaSession();
});

export default main;
