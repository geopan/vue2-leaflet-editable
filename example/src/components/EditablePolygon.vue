<template>
  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Editable polygon sample</h3>
    </div>
    <editable-map
      :editable="editMode"
      id="polygonmap"
      :zoom="zoom"
      :center="center"
      style="height: 80%"
    >
      <l-tile-layer :url="url" :attribution="attribution"/>
      <editable-polygon :editable="editMode" :lat-lngs="polygon"/>
    </editable-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { EditableMap, EditablePolygon } from "../../../src/components";

export default {
  name: "EditablePolygonSample",
  components: {
    LTileLayer,
    EditableMap,
    EditablePolygon
  },
  data: () => ({
    editMode: true,
    zoom: 14,
    center: latLng(-33.8688, 151.2093),
    url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

    currentZoom: 13,

    polygon: [
      latLng(-33.8688, 151.2093),
      latLng(-33.86, 151.2093),
      latLng(-33.86, 151.215),
      latLng(-33.8688, 151.215)
    ]
  }),
  methods: {}
};
</script>