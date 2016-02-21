<template>
  <div class="module">
    <div class="sidebar">
      <div class="icon-ic_call_black_24px"></div>
      <div class="dots-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      div.icon-
    </div>
    <div class="main-call"></div>
  </div>
</template>

<script>
  
export default {

  name: "phone-component"
}

</script>

<style lang="stylus" scoped>

@import "../reset.styl"
@import "../font.styl"

.sidebar
  height 100%
  box-shadow: greyHer
  width 90px
  box-shadow 5px 9px 27px 3px rgba(0, 0, 0, 0.05)
  .icon-ic_call_black_24px
    width 46px
    height 46px
    background-color goldHer
    display block
    border-radius 50%
    color white
    line-height 46px
    text-align center
    font-size 25px
    position relative
    margin: auto
    &:after
      content ''
      position absolute
      bottom -20px
      display block
      width 100%
      height 10px
      background-repeat no-repeat
      background-position center center
      background-size contain
      background-image url('/static/shadow.png')
  .dots-container
      position relative
      top 50%
      transform translateY(-50%)
    .dot
      width 10px
      height 10px
      background-color goldHer
      margin: 50px auto
      border-radius: 50%


</style>