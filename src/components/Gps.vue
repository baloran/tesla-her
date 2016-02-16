<template>
  <div class="module" v-touch:press="onPress">
    <h2>Gps Components</h2>
  </div>
</template>

<script>
  
export default {

  name: "gps-component",

  methods: {
    onPress: function (e) {
      e.preventDefault()

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

          $(self.$el).css({
            position: "absolute",
            backgroundColor: "red"
          })
        }
      })

      // let circle = $('<div class="circle"></div>')
      // console.log(e)
      // console.log("x: "+ e.pointers[0].pageX + " y: " + e.pointers[0].pageY)

      // circle.css({
      //   'left': e.pointers[0].pageX - 8,
      //   'top': e.pointers[0].pageY - 8,
      // })
      // $(this.$el).append(circle)
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