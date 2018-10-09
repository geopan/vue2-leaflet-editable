const nodeExternals = require("webpack-node-externals");

module.exports = {
  configureWebpack: {
    externals: [
      nodeExternals(),
      { leaflet: "L" },
      { "vue2-leaflet": "vue2-leaflet" }
    ]
  }
};
