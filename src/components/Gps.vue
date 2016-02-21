<template>
  <div class="module">
    <h2>Gps Components</h2>
  </div>
</template>

<script>
  
export default {

  name: "gps-component",

  ready: function () {

    let self = this
    var curr;

    $('.module').on({
      mousedown: function (e) {
        e.preventDefault();

        console.log("click");

        curr = $(e.currentTarget);

        console.log(curr[0]);
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
            });
            curr.on({
              mouseup: function (e) {
                console.log('up');
                curr.off('mouseup','mouseleave');
                curr = null;
                console.log(curr);
              },

              mouseleave: function (e) {
                console.log('mouseleave');
                curr.off('mouseup','mouseleave');
                curr = null;
                console.log(curr);
              }
            })
          }
        });
      },
    });
    $('body').on({
      mousemove: function (e) {
        console.log('curr :' + curr);
        if (curr != null) {
          console.log('moving');
          console.log(e.pageX);
          curr.css({
            left: e.pageX - 25,
            right: e.pageX + 25,
            top: e.pageY - 25,
            bottom: e.pageY + 25,
          });
        } else {
        }
      }
    });
  }
};

</script>

<style lang="stylus">

.circle
  width 20px 
  height 20px
  background-color red
  display inline-block
  border-radius 50%
  position absolute

</style>