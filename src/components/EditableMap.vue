<template>
  <div class="vue2leaflet-map">
    <slot v-if="ready"/>>
  </div>
</template>

<script>
import L from "leaflet";
import "leaflet-editable";

import { LMap, propsBinder } from "vue2-leaflet";

const { mounted, ...others } = LMap;

const props = {
  editable: {
    type: Boolean,
    default: false
  }
};

export default {
  name: "EditableMap",
  mixins: [others],
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    Object.assign(this.options, {
      minZoom: this.minZoom,
      maxZoom: this.maxZoom,
      maxBounds: this.maxBounds,
      maxBoundsViscosity: this.maxBoundsViscosity,
      worldCopyJump: this.worldCopyJump,
      crs: this.crs
    });
    if (this.center != null) {
      this.options.center = this.center;
    }
    if (this.zoom != null) {
      this.options.zoom = this.zoom;
    }

    // add editable option
    if (this.editable) {
      this.options.editable = this.editable;
    }

    this.mapObject = L.map(this.$el, this.options);

    this.setBounds(this.bounds);
    this.mapObject.on("moveend", () => {
      if (this.movingRequest != 0) {
        this.movingRequest -= 1;
        return;
      }
      if (this.mapObject.getZoom() != this.zoom) {
        this.$emit("update:zoom", this.mapObject.getZoom());
      }
      let center = this.mapObject.getCenter();
      if (this.center != null) {
        if (Array.isArray(this.center)) {
          this.center[0] = center.lat;
          this.center[1] = center.lng;
        } else {
          this.center.lat = center.lat;
          this.center.lng = center.lng;
        }
      } else {
        this.$emit("update:center", center);
      }
      let bounds = this.mapObject.getBounds();
      if (this.bounds != null) {
        if (Array.isArray(this.bounds)) {
          if (Array.isArray(this.bounds[0])) {
            this.bounds[0][0] = bounds._southWest.lat;
            this.bounds[0][1] = bounds._southWest.lng;
            this.bounds[1][0] = bounds._northEast.lat;
            this.bounds[1][1] = bounds._northEast.lng;
          } else {
            this.bounds[0].lat = bounds._southWest.lat;
            this.bounds[0].lng = bounds._southWest.lng;
            this.bounds[1].lat = bounds._northEast.lat;
            this.bounds[1].lng = bounds._northEast.lng;
          }
        } else {
          this.bounds._southWest.lat = bounds._southWest.lat;
          this.bounds._southWest.lng = bounds._southWest.lng;
          this.bounds._northEast.lat = bounds._northEast.lat;
          this.bounds._northEast.lng = bounds._northEast.lng;
        }
      } else {
        this.$emit("update:bounds", bounds);
      }
    });
    L.DomEvent.on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, props);
    this.ready = true;
    this.$emit("mapready");
  }
};
</script>
