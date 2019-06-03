<template>
  <div>
    <div style="height: 20%; overflow: auto;">
      <h3>Simple map</h3>
      <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
    </div>
    <editable-map
      id="simplemap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"/>
      <l-marker :lat-lng="currentCenter"/>
    </editable-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
import { EditableMap } from "../../../src/components";

export default {
  name: "Simple",
  components: {
    LTileLayer,
    LMarker,
    EditableMap
  },
  data() {
    return {
      zoom: 13,
      center: latLng(-33.8688, 151.2093),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      currentZoom: 13,
      currentCenter: latLng(-33.8688, 151.2093),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>