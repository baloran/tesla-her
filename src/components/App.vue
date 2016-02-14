<template>
  <header>
    <button></button>
  </header>
  <aside>
    
  </aside>
  <!-- main view -->
  <div class="container">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>

  <footer>
    lel
  </footer>
</template>

<style lang="stylus">

@import "../reset.styl"

header
  background-color red
  height 100px

aside
  background-color blue
  height 100px

.container
  background-color grey
  height 1544px
  
  h2
    margin 0

footer
  background-color yellow
  height 176px

</style>