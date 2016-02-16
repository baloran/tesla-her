<template>
  <header>
    <button></button>
  </header>
  <aside>
    
  </aside>
  <!-- main view -->
  <div class="container">
    <div class="column">
      <gps-component></gps-component>
    </div>
    <div class="column">
      <music-component></music-component>
      <settings-component></settings-component>
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

.column
  width 50%
  height 100%
  display inline-block

.module
  background-color green
  width 100%
  display inline-block

.icon
  display inline-block
  width 1em;
  height 1em;
  fill currentColor;
</style>