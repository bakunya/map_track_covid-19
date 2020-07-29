import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style/style.css";
import "./components/global-total.js";
import "./components/indonesia-cases-modal.js";
import "./components/alert.js";
import main from "./script/main.js";
import map from "./script/map/render-map.js";

main();
map();
