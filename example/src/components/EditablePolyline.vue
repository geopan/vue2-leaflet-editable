<template>
  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Editable polyline sample</h3>
      <button type="button" @click="editMode = !editMode">Toggle editMode</button>
      <span>EditMode: {{editMode}}</span>
    </div>
    <editable-map
      id="polylinemap"
      :editable="editMode"
      :zoom="zoom"
      :center="center"
      style="height: 80%"
    >
      <l-tile-layer :url="url" :attribution="attribution"/>
      <editable-polyline :editable="editMode" :lat-lngs="polyline"/>
    </editable-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { EditableMap, EditablePolyline } from "../../../src/components";

export default {
  name: "EditablePolylineSample",
  components: {
    LTileLayer,
    EditableMap,
    EditablePolyline
  },
  data: () => ({
    editMode: true,
    zoom: 14,
    center: latLng(-33.8688, 151.2093),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

    currentZoom: 13,

    polyline: [
      latLng(-33.8688, 151.2093),
      latLng(-33.86, 151.2093),
      latLng(-33.86, 151.215)
    ]
  }),
  methods: {}
};
</script>