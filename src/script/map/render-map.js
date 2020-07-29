import "es6-promise/dist/es6-promise.min.js";
import "es6-promise/dist/es6-promise.auto.min.js";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

const map = () => {
  fetch("https://corona.lmao.ninja/v2/jhucsse")
    .then((response) => response.json())
    .then((response) => {
      renderMap(response);
    })
    .catch((err) => {
      document.querySelector(".alert").classList.add("show");
      document.querySelector(".alert").classList.remove("hidden");
      console.log(err);
    });
};

const renderMap = (response) => {
  //TODO:: masukan token mapbox disini
  const token = "";
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k",
    center: [113.9213, -0.7893],
    zoom: 3,
    bearing: -12,
    pitch: 60,
    interactive: true,
  });

  map.on("load", function () {
    map.addSource("places", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        crs: {
          type: "name",
          properties: {
            name: "urn:ogc:def:crs:OGC:1.3:CRS84",
          },
        },
        features: response.map((data) => {
          let province = data.province;
          if (!province) {
            province = "";
          } else {
            province = `${province},`;
          }
          return {
            type: "Feature",
            properties: {
              description: `
              <table class="table table-borderless">
              <thead>
                <tr>
                  <th colspan="2">${province} ${data.country}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Confirmed Cases: </th>
                  <td>${data.stats.confirmed}</td>
                </tr>
                <tr>
                  <th>Recovery: </th>
                  <td>${data.stats.recovered}</td>
                </tr>
                <tr>
                  <th>Deaths: </th>
                  <td colspan="2">${data.stats.deaths}</td>
                </tr>
                <tr>
                  <th>Update At: </th>
                  <td>${data.updatedAt}</td>
                </tr>
              </tbody>
            </table>
                `,
              icon: "rocket",
            },
            geometry: {
              type: "Point",
              coordinates: [
                `${data.coordinates.longitude}`,
                `${data.coordinates.latitude}`,
              ],
            },
          };
        }),
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50,
    });

    map.addLayer({
      id: "clusters",
      type: "circle",
      source: "places",
      filter: ["has", "point_count"],
      paint: {
        "circle-opacity": 0.75,
        "circle-stroke-color": "#000",
        "circle-stroke-width": 1,
        "circle-color": [
          "step",
          ["get", "point_count"],
          "#ff6700",
          20,
          "#f32013",
          750,
          "#FFFF00",
        ],
        "circle-radius": ["step", ["get", "point_count"], 20, 100, 30, 750, 40],
      },
    });

    map.addLayer({
      id: "cluster-count",
      type: "symbol",
      source: "places",
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        "text-size": 12,
      },
    });

    map.addLayer({
      id: "unclustered-point",
      type: "circle",
      source: "places",
      filter: ["!", ["has", "point_count"]],
      paint: {
        "circle-opacity": 0.75,
        "circle-color": "#f0d500",
        "circle-radius": 10,
        "circle-stroke-width": 1,
        "circle-stroke-color": "#000",
      },
    });

    map.on("click", "clusters", function (e) {
      const features = map.queryRenderedFeatures(e.point, {
        layers: ["clusters"],
      });
      const clusterId = features[0].properties.cluster_id;
      map
        .getSource("places")
        .getClusterExpansionZoom(clusterId, function (err, zoom) {
          if (err) return;

          map.easeTo({
            center: features[0].geometry.coordinates,
            zoom: zoom,
          });
        });
    });

    map.on("click", "unclustered-point", function (e) {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const { description } = e.features[0].properties;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );

    map.on("mouseenter", "clusters", function () {
      map.getCanvas().style.cursor = "pointer";
    });
    map.on("mouseleave", "clusters", function () {
      map.getCanvas().style.cursor = "";
    });
  });
};

export default map;
