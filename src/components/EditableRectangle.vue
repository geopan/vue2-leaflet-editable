<template>
  <div style="display: none;">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
import { LRectangle } from "vue2-leaflet";
import mixins from "../mixins";

export default {
  name: "EditableRectangle",
  extends: LRectangle,
  mixins: [mixins]
};
</script>
