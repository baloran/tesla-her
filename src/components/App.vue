<template>
  <header>
    <button></button>
    <div class="logo">
      <img src="/static/logo.png" alt="Logo">
    </div>
  </header>
  <aside>
    
  </aside>
  <!-- main view -->
  <div class="container">
    <div class="hero">
      <gps-component></gps-component>
    </div>
    <div class="column">
      <!-- <gps-component></gps-component> -->
    </div><div class="column">
      <music-component class="split"></music-component>
      <settings-component class="split"></settings-component>
    </div>
  </div>

  <footer>
    lel
  </footer>
</template>

<script>

export default {


}

</script>

<style lang="stylus">

@import "../reset.styl"

html, body
  width 1200px
  height 1920px
  background-color #f75053

header
  background-color transparent
  height 100px
  padding 25px
  box-sizing border-box
  button
    width 42px
    height 42px
    border-radius 50%
    background-color transparent
    position absolute
    border 5px solid #F9Cfa5
  .logo
    position absolute
    left 45%

aside
  background-color white
  border-radius 15px
  height 180px
  margin 30px
  box-shadow 0px 6px 8px rgba(17,23, 29, 0.31)

.container
  width 1200px
  display flex
  flex-wrap wrap
  align-items stretch

  .hero
    width 100%
    margin-left 30px
    margin-right 30px
    height 625px
    position relative
    .module
      background-color white
      border-radius 20px
      height 600px
      box-shadow 0px 6px 8px rgba(17,23, 29, 0.31)
  h2
    margin 0

footer
  background-color yellow
  height 220px

.column
  width calc(50% - 45px)
  height 650px
  display flex
  flex-direction column
  position relative
  background-color green
  margin-bottom 30px
  &:nth-child(2)
    margin-left 30px
    margin-right 15px
  &:last-child
    margin-right 30px
    margin-left 15px

  .split
    background-color blue
    height calc(50% - 10px)
    position relative
    &:only-child
      height 100%
    &:nth-child(2)
      margin-bottom 10px
    &:last-child
      margin-top 10px

.module
  background-color white
  border-radius 20px
  display inline-block
  transform-origin 50% 50%
  position absolute
  height 100%
  top 0px
  bottom 0px
  left 0px
  right 0px
  overflow hidden
  z-index 10000

.icon
  display inline-block
  width 1em;
  height 1em;
  fill currentColor;
</style>