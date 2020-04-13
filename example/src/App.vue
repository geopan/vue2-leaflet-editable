<template>
  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Editable polygon sample</h3>
      <p>Click on an object to enable the edit mode and modify its shape</p>
    </div>
    <editable-map editable :zoom="zoom" :center="center" style="height: 500px">
      <l-tile-layer :url="url" :attribution="attribution" />
      <editable-polygon
        @click="editMode['polygon'] = !editMode['polygon']"
        :editable="editMode['polygon']"
        :lat-lngs="polygon"
      />
      <editable-polyline
        :editable="editMode['polyline']"
        @click="editMode['polyline'] = !editMode['polyline']"
        :lat-lngs="polyline"
      />
    </editable-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LTileLayer } from "vue2-leaflet";

import {
  EditableMap,
  EditablePolygon,
  EditablePolyline
} from "../../src/components";

export default {
  name: "App",
  components: {
    LTileLayer,
    EditableMap,
    EditablePolygon,
    EditablePolyline
  },
  data: () => ({
    editMode: {
      polygon: false,
      polyline: false
    },
    zoom: 14,
    center: latLng(-33.8688, 151.2093),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    polygon: [
      latLng(-33.8688, 151.2093),
      latLng(-33.86, 151.2093),
      latLng(-33.86, 151.215),
      latLng(-33.8688, 151.215)
    ],
    polyline: [
      latLng(-33.8688, 151.2193),
      latLng(-33.86, 151.2193),
      latLng(-33.86, 151.225)
    ]
  })
};
</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

body {
  margin: 10px;
  font-family: Helvetica, Verdana, sans-serif;
}
</style>
