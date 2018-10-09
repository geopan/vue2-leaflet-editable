export default {
  props: {
    editable: {
      type: Boolean,
      default: false,
      custom: true
    }
  },
  methods: {
    setEditable(enable) {
      if (enable) {
        this.mapObject.enableEdit();
      } else {
        this.mapObject.disableEdit();
      }
    },
    enableEdit() {
      this.mapObject.enableEdit();
    },
    disableEdit() {
      this.mapObject.disableEdit();
    },
    toggleEdit() {
      this.mapObject.toggleEdit();
    }
  },
  mounted() {
    this.setEditable(this.editable);
  },
  watch: {
    editable(v) {
      return this.setEditable(v);
    }
  }
};
