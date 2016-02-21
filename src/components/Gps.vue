<template>
  <div class="module">
  <div id='inputs'></div>
    <div id="map"></div>
  </div>
</template>

<script>
  
export default {

  name: "gps-component",

  ready: function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFsb3JhbiIsImEiOiJJWVNDS3FrIn0.ppPp5dNfLBjCoKSGiDhIKQ';
    let map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/baloran/cikmj6zju00ckb5lwzmaeday5', //stylesheet location
        center: [2.4432200, 48.8641500], // starting position
        zoom: 14 // starting zoom
    });

    map.addControl(new mapboxgl.Directions({
       unit: 'metric',
       profile: 'driving',
    }));

    let self = this
    let curr;

    $('.modsule').on({
      mousedown: function (e) {
        e.preventDefault();

        curr = $(e.currentTarget);

        dynamics.animate(self.$el, {
          "border-radius": 50,
          left: e.offsetX - 25,
          right: e.offsetX + 25,
          top: e.offsetY - 25,
          bottom: e.offsetY + 25,
          height: 50,
          width: 50
        },{
          type: dynamics.spring,
          frequency: 200,
          friction: 270,
          duration: 800
        });
      },

      mouseup: function (e) {
        curr = null
      }
    });

    $('.container').on({
      mousemove: function (e) {
        if (curr != null) {

          dynamics.animate(self.$el, {
            "border-radius": 50,
            left: e.offsetX - 25,
            right: e.offsetX + 25,
            top: e.offsetY - 25,
            bottom: e.offsetY + 25,
          },{
            type: dynamics.spring,
            frequency: 200,
            friction: 270,
            duration: 1000
          });
        }
      }
    });
  }
}

</script>

<style lang="stylus">

.directions-control-directions-container
  display none

#inputs
    z-index 10
    top 10px
    left 10px

#map
  position absolute
  left 0
  right 0
  bottom 0
  top 0
  overflow hidden
  canvas
    border-radius 20px

</style>