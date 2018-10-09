<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import { LPolygon } from "vue2-leaflet";
import mixins from "../mixins";

export default {
  name: "EditablePolygon",
  extends: LPolygon,
  mixins: [mixins]
};
</script>
