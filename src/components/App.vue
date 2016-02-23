<template>
  <header>
    <button></button>
    <div class="logo">
      <img src="/static/logo.png" alt="Logo">
    </div>
  </header>
  <aside>
    <div class="menu-item active">
      <div class="icon icon-music"></div>
      <p class="label">Music</p>
    </div>
    <div class="menu-item active">
      <div class="icon icon-ic_navigation_black_24px"></div>
      <p class="label">Nav</p>
    </div>
    <div class="menu-item active">
      <div class="icon icon-heart"></div>
      <p class="label">Health</p>
    </div>
    <div class="menu-item">
      <div class="icon icon-web"></div>
      <p class="label">Web</p>
    </div>
    <div class="menu-item">
      <div class="icon icon-ic_call_black_24px"></div>
      <p class="label">Call</p>
    </div>
  </aside>
  <!-- main view -->
  <div class="container">
    <div class="hero">
      <music-component></music-component>
    </div>
    <div class="column">
    <phone-component class="split"></phone-component>
    </div>

    <div class="column">
      <gps-component class="split"></gps-component>
      <settings-component class="split"></settings-component>
    </div>

  </div>

  <footer>
    lel
  </footer>
</template>

<script>

export default {

  ready : function() {
    console.log('im ready');
    var App = function() {
      this.$ = {};
      this.$.button = $('header button');
      this.init();
    }

    App.prototype.init = function() {
      this.initEvents();
    };

    App.prototype.initEvents = function() {
      this.$.button.on('click', $.proxy(this.speech,this));
    };

    App.prototype.speech = function() {
      if (('webkitSpeechRecognition' in window)) {
        var that = this;

        var rec = new webkitSpeechRecognition();
        //config recognition
        rec.continuous = true;
        rec.interimResults = true;
        rec.lang = 'en-US';

        var userSaid = function(str, s) {
          return str.indexOf(s) > -1;
        };

        rec.onresult = function(e) {

          for (var i = e.resultIndex; i < e.results.length; ++i) {

            if (e.results[i].isFinal) {

              console.log(e.results);
              var str = e.results[i][0].transcript;

              if (userSaid(str, 'app')) {
                alert('app being said');
              }

            }

          }

        };

        this.$.button.on('click', function() {
          rec.start();
        });

      }
    };

    var app = new App();
  }

}

</script>

<style lang="stylus">

@import "../reset.styl"
@import "../font.styl"

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
    outline none
    left 40px
    height 40px
    &:after
      content ''
      position absolute
      bottom -30px
      display block
      width 200%
      height 20px
      left: -15px
      background-repeat no-repeat
      background-position center center
      background-size contain
      background-image url('/static/shadow-vocal.png')
  .logo
    position absolute
    left 600px
    margin-left -63px

aside
  background-color white
  border-radius 15px
  height 180px
  margin 30px
  box-shadow 0px 6px 8px rgba(17,23, 29, 0.31)
  .menu-item
    float left
    width 20%
    text-align center
    margin-top: 42px
    .icon
      font-size 50px
      color: greyHer
      padding-bottom: 20px
      position relative
      &:after
        content : ''
        position: absolute
        bottom: 0px
        display: block
        width: 100%
        height: 5px
        background-repeat no-repeat
        background-position center center
        background-size contain
        background-image url('/static/shadow.png')
    p.label
      text-transform uppercase
      font-family geoMed
      font-size 20px
      letter-spacing 0.26em
      color greyHer
      margin-bottom: 0
    &.active
      .icon
        color redHer
      p.label
       color redHer

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
    height calc(50% - 10px)
    position relative
    &:only-child
      height 100%
      margin-top 0px !important
    &:nth-child(2)
      margin-top 10px
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