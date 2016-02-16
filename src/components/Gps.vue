<template>
  <div class="module" v-touch:releaseme="onRelease" v-touch:press="onPress">
    <h2>Gps Components</h2>
  </div>
</template>

<script>
  
export default {

  name: "gps-component",

  methods: {
    onPress: function (e) {
      e.preventDefault()

      console.log(e)

      let self = this

      dynamics.animate(this.$el, {
        width: 50,
        height: 50,
        "border-radius": 50
      },{
        type: dynamics.spring,
        frequency: 200,
        friction: 270,
        duration: 800,
        complete: function () {

          $(window).mousemove(function (e){
            console.log(e.mouseX)
            $(self.$el).css({
              position: "absolute",
              backgroundColor: "red",
              left: e.pageX,
              top: e.pageY
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