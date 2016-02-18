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
    let curr;

    $('.module').on({
      mousedown: function (e) {
        e.preventDefault();

        console.log(e)

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

          console.log(e)
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
        } else {
          console.log("salut")
        }
      }
    })
  },

  methods: {
    onPress: function (e) {
      e.preventDefault()

      let self = this

      let $e = e;

      dynamics.animate(this.$el, {
        "border-radius": 50,
        left: $e.pointers[0].offsetX - 25,
        right: $e.pointers[0].offsetX + 25,
        top: $e.pointers[0].offsetY - 25,
        bottom: $e.pointers[0].offsetY + 25,
        height: 50,
        width: 50
      },{
        type: dynamics.spring,
        frequency: 200,
        friction: 270,
        duration: 800,
        complete: function (e) {
          
          console.log(e)
          console.log(self.$el)

          $('.container').mousemove(function (e) {
            dynamics.animate(self.$el, {
              left: e.offsetX,

            },{
              type: dynamics.gravity,
              duration: 100
            })
          })
        }
      })
    },

    onRelease: function (e) {
      console.log("release")
    }
  }
}

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