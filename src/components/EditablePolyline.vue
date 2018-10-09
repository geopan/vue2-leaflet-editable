<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import { LPolyline } from "vue2-leaflet";
import mixins from "../mixins";

export default {
  name: "EditablePolyline",
  extends: LPolyline,
  mixins: [mixins]
};
</script>
