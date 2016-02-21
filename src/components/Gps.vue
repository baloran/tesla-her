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
    let last;

    $('.module').on({
      mousedown: function (e) {

        e.preventDefault();

        curr = $(e.currentTarget);

        dynamics.animate(curr[0], {
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
          duration: 800,
          complete: function() {
            curr.parent().before(curr);

            curr.css({
              left: e.pageX - 25,
              right: e.pageX + 25,
              top: e.pageY - 25,
              bottom: e.pageY + 25,
              backgroundColor: "yellow"
            });
          }
        });
      },

      mouseup: function (e) {

        if (curr != null) {

          let last = getElsAt(e.clientY,e.clientX);
          console.log(last)
          // $(curr).detach().appendTo(last);
        }
        curr = null
      }
    });

    $(' .column').on({
      mouseenter: function (e) {

        if (curr != null) {
          last = e.target
        }
      }
    })

    $('body').on({
      mousemove: function (e) {

        if (curr != null) {

          curr.css({
            left: e.pageX - 25,
            right: e.pageX + 25,
            top: e.pageY - 25,
            bottom: e.pageY + 25,
          });
        } else {
        }
      }
    });

    function getElsAt(pageY, pageX){
      return $("body")
        .find("*")
        .filter(function() {

          var offset = $(this).offset();
          var left = offset.left;
          var right = offset.right;
          var width = $(this).width();
          var height = $(this).height();

          if(pageX > left && pageX < left + width) {
            if(pageY > top && pageY < top + height) {
              console.log($(this))
              return $(this)
            }
          }
        });
    }
  }
};

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