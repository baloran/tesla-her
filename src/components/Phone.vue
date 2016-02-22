<template>
  <div class="module">
    <div class="sidebar">
      <div class="icon-ic_call_black_24px"></div>
      <div class="dots-container">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="main-call">
      <div class="content">
        <div class="mute icon-ic_call_black_24px"></div>
        <div class="caller">
          <div class="caller-picture"></div>
          <p class="caller-name">Sarah LANG</p>
          <p class="time">1:34</p>
        </div>
        <div class="end icon-ic_call_end_black_24px"></div>
      </div>
    </div>
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
  position relative
  box-shadow 5px 9px 27px 3px rgba(0, 0, 0, 0.05)
  overflow auto
  float left
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
    margin: 20px auto
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
      position absolute
      left: 50%
      margin-left -5px
      top 50%
      transform translateY(-50%)
    .dot
      width 10px
      height 10px
      background-color grayHer
      margin: 50px auto
      border-radius: 50%
      &.active
        background-color goldHer
.main-call
  width: calc(100% - 90px)
  text-align: center
  float left
  height: 100%
  .content
    position: relative;
    top: 60%;
    transform: translateY(-50%)
    > div 
      display: inline-block
      vertical-align middle
      &:first-child
        border-radius 50%
        width 84px
        height: 84px
        background-color goldHer
        border: 8px solid #fbe2c9
        line-height 84px
        color white
        font-size 40px
        transform: rotate(20deg)
        margin-right: -20px
        margin-top -140px
      &:nth-child(2)
        div.caller-picture
          background-image url('/static/caller-picture.png')
          background-size cover
          width: 180px
          height: 180px
          border-radius 50%
        .caller-name
          font-family geoBook
          font-size 24px
          color #b8b8b8
        .time
          font-family geoBook
          font-size 20px
          color grayHer
      &:last-child
        border-radius 50%
        width 84px
        height: 84px
        background-color redHer
        border: 8px solid #fa9698
        line-height 84px
        color white
        font-size 40px
        margin-left: -20px
        margin-top -140px





</style>