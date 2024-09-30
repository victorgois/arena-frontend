import React, { forwardRef, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const MapboxExample = forwardRef((props, ref) => {
  const mapContainerRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidmljdG9yZ29pcyIsImEiOiJjbTFrdGVreHMwMXF0MnNvZHVtcWNyNm45In0.miPFhffjovGUrIDzwwQFtQ";

    mapRef.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-44.01466, -19.92886],
      zoom: 15,
    });

    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [-44.01174, -19.92786],
              [-44.01185, -19.92776],
              [-44.01196, -19.92766],
              [-44.01207, -19.92756],
              [-44.01236, -19.92731],
              [-44.01236, -19.92731],
              [-44.01283, -19.92714],
              [-44.01344, -19.92724],
              [-44.01418, -19.92782],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [-44.01519, -19.92559],
              [-44.01472, -19.92561],
              [-44.01417, -19.92581],
              [-44.01389, -19.92615],
              [-44.01345, -19.92658],
              [-44.01343, -19.92708],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [-44.01366, -19.92734],
              [-44.01418, -19.92676],
              [-44.0145, -19.92642],
              [-44.01482, -19.92631],
              [-44.0151, -19.92629],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: {},
          geometry: {
            coordinates: [
              [-44.013223291475974, -19.927873158914107],
              [-44.01259627363284, -19.928411741740142],
              [-44.01224893276476, -19.928801895086238],
              [-44.01188805918598, -19.929064823968893],
              [-44.01146403273091, -19.928988489822213],
              [-44.01094978788115, -19.928721320018493],
              [-44.00984716705668, -19.928107892625015],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: { color: "yellow" },
          geometry: {
            coordinates: [
              [-44.01372564115774, -19.928385268498005],
              [-44.01329648773024, -19.928798809804654],
              [-44.01277613919939, -19.92914174567717],
              [-44.01235235018972, -19.929333385987757],
              [-44.01217532440088, -19.929444335534978],
              [-44.01126873778529, -19.929635975478515],
              [-44.01070010949385, -19.929333385987757],
              [-44.00974524307283, -19.9288189825231],
            ],
            type: "LineString",
          },
        },
        {
          type: "Feature",
          properties: { color: "red" }, // Adicionamos uma propriedade de cor
          geometry: {
            coordinates: [
              [-44.01658, -19.92697],
              [-44.01611243950188, -19.927304252048383],
              [-44.01589786278813, -19.927536240355163],
              [-44.015903227205975, -19.927884222176807],
              [-44.01598369347363, -19.928035518382014],
              [-44.01616608368032, -19.928444017412584],
              [-44.01619827018738, -19.92890294716271],
              [-44.016203634605226, -19.92943247983367],
              [-44.01633774505132, -19.92978045747987],
              [-44.01692783101413, -19.929346746093056],
              [-44.017469637216365, -19.929029026531026],
            ],
            type: "LineString",
          },
        },
      ],
    };

    mapRef.current.on("load", () => {
      mapRef.current.addSource("line", {
        type: "geojson",
        data: geojson,
      });

      // Camada para linhas animadas (todas exceto a vermelha)
      mapRef.current.addLayer({
        type: "line",
        source: "line",
        id: "line-animated",
        paint: {
          "line-color": "green",
          "line-width": 6,
          "line-opacity": 0.8,
        },
        filter: ["!=", ["get", "color"], "red"],
      });

      // Camada para a linha vermelha (sem animação)
      mapRef.current.addLayer({
        type: "line",
        source: "line",
        id: "line-red",
        paint: {
          "line-color": "red",
          "line-width": 6,
          "line-opacity": 0.8,
        },
        filter: ["==", ["get", "color"], "red"],
      });

      mapRef.current.addLayer({
        type: "line",
        source: "line",
        id: "line-yellow",
        paint: {
          "line-color": "yellow",
          "line-width": 6,
          "line-opacity": 0.8,
        },
        filter: ["==", ["get", "color"], "yellow"],
      });

      const dashArraySequence = [
        [0, 4, 3],
        [0.5, 4, 2.5],
        [1, 4, 2],
        [1.5, 4, 1.5],
        [2, 4, 1],
        [2.5, 4, 0.5],
        [3, 4, 0],
        [0, 0.5, 3, 3.5],
        [0, 1, 3, 3],
        [0, 1.5, 3, 2.5],
        [0, 2, 3, 2],
        [0, 2.5, 3, 1.5],
        [0, 3, 3, 1],
        [0, 3.5, 3, 0.5],
      ];

      let step = 0;

      function animateDashArray(timestamp) {
        const newStep = parseInt((timestamp / 50) % dashArraySequence.length);

        if (newStep !== step) {
          mapRef.current.setPaintProperty(
            "line-animated",
            "line-dasharray",
            dashArraySequence[step]
          );
          step = newStep;
        }

        requestAnimationFrame(animateDashArray);
      }

      animateDashArray(0);

      // Adicione a legenda após o carregamento do mapa
      const legendEl = document.createElement("div");
      legendEl.className =
        "absolute bottom-8 right-8 bg-white p-4 rounded shadow-md";
      legendEl.innerHTML = `
        <h4 class="font-bold mb-2">Legenda</h4>
        <div class="flex flex-col space-y-2">
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
            <span>Linha Vermelha</span>
          </div>
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
            <span>Ruas abertas mas com sentido alterado</span>
          </div>
          <div class="flex items-center">
            <span class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
            <span>Linha Amarela</span>
          </div>
        </div>
      `;
      mapRef.current.getContainer().appendChild(legendEl);
    });

    // Clean up on unmount
    return () => mapRef.current.remove();
  }, []);

  return (
    <div className="relative w-full h-[400px]" ref={ref}>
      <h2 className="absolute text-xs top-4 left-4 z-10 text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded">
        Sinalização de mudança de Tráfego
      </h2>
      <div id="map" ref={mapContainerRef} className="w-full h-[400px]"></div>
    </div>
  );
});

export default MapboxExample;
