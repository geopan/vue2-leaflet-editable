<template>
  <div class="vue2leaflet-map">
    <slot v-if="ready"/>
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
  extends: LMap,
  props: {
    editable: {
      type: Boolean,
      default: false
    }
  },
  beforeMount() {
    this.options.editable = !!this.editable;
  }
};
</script>
