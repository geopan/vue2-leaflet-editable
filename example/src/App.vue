<template>
  <div>
    <ul id="side">
      <li>
        <a href="#" @click="currentView = 'simple'">Simple map</a>
      </li>
      <li>
        <a href="#" @click="currentView = 'editable-polygon'">Editable Polygon</a>
      </li>
      <li>
        <a href="#" @click="currentView = 'editable-polyline'">Editable Polyline</a>
      </li>
    </ul>
    <component id="full_div" :is="currentView"/>
  </div>
</template>

<script>
import Simple from "./components/Simple";
import EditablePolygon from "./components/EditablePolygon";
import EditablePolyline from "./components/EditablePolyline";

export default {
  name: "App",
  components: {
    Simple,
    EditablePolygon,
    EditablePolyline
  },
  data() {
    return {
      currentView: "simple"
    };
  }
};
</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";

.leaflet-fake-icon-image-2x {
  background-image: url(../node_modules/leaflet/dist/images/marker-icon-2x.png);
}
.leaflet-fake-icon-shadow {
  background-image: url(../node_modules/leaflet/dist/images/marker-shadow.png);
}

body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}

#side {
  float: left;
  width: 208px;
}

#full_div {
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 208px;
  bottom: 0;
  padding-left: 8px;
  border-left: 1px solid #ccc;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #ccc;
}

li:last-child {
  border: none;
}

li a {
  font-size: 15px;
  padding-left: 8px;
  text-decoration: none;
  color: #000;
  display: block;

  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}

li a:hover {
  font-size: 20px;
  background: #f6f6f6;
}
</style>