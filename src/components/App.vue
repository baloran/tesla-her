<template>
  <header>
    <button></button>
  </header>
  <aside>
    
  </aside>
  <!-- main view -->
  <div class="container">
    <gps-component></gps-component>
    <music-component></music-component>
    <settings-component></settings-component>
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

header
  background-color red
  height 100px

aside
  background-color blue
  height 200px

.container
  background-color grey
  height 1400px
  width 1200px
  display flex
  flex-wrap wrap
  align-items stretch
  
  h2
    margin 0

footer
  background-color yellow
  height 220px

.module
  background-color green
  min-width 50%

.icon
  display inline-block
  width 1em;
  height 1em;
  fill currentColor;
</style>