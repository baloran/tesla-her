<template>
  <div class="module phone-module">
    <div class="sidebar">
      <div class="icon-ic_call_black_24px"></div>
      <div class="dots-container">
        <div class="dot active"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="icon-fs"></div>
    </div>
    <div class="main-call">
      <div class="slides-container">
        <div class="slide first-slide">
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
        <div class="slide second-slide">
          <div class="content">
            <div class="icon-ic_dialpad_black_24px"></div>
            <div class="icon-ic_restore_black_24px"></div>
            <div class="icon-ic_star_white_18px"></div>
            <div class="icon-ic_contacts_black_24px"></div>
          </div>
        </div>
        <div class="slide third-slide">
          <div class="content">
            <div class="call-input">0669580398</div>
            <div class="buttons">
              <div class="icon-ic_call_black_24px"></div>
              <div class="icon-ic_clear_black_24px"></div>
            </div>
            <div class="pad">
              <div class="keypad">1</div>
              <div class="keypad">2</div>
              <div class="keypad">3</div>
              <div class="keypad">4</div>
              <div class="keypad">5</div>
              <div class="keypad">6</div>
              <div class="keypad">7</div>
              <div class="keypad">8</div>
              <div class="keypad">9</div>
              <div class="keypad">*</div>
              <div class="keypad">0</div>
              <div class="keypad">#</div>
            </div>
            <div class="contacts">
              <div class="onscreen">
                <div class="contact">
                  <div class="photo"></div>
                  <div class="icon-ic_call_black_24px"></div>
                  <p class="name">Emma Watson</p>
                  <p class="number">0669580398</p>
                </div>
                <div class="contact">
                  <div class="photo"></div>
                  <div class="icon-ic_call_black_24px"></div>
                  <p class="name">Emma Watson</p>
                  <p class="number">0669580398</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  
export default {

  name: "phone-component",

  ready : function() {
    
    var Phone = function() {
      this.init();
    };

    Phone.prototype.init = function() {
      this.$ = {};
      this.$.phoneModule = $('.phone-module');
      this.$.cont = this.$.phoneModule.find('.main-call');
      this.$.slider = this.$.phoneModule.find('.slides-container');
      this.$.slides = this.$.phoneModule.find('.slide');
      console.log(this.$.slides);
      this.initEvents();
    };

    Phone.prototype.initEvents = function() {
      var that = this;
      this.$.cont.on({
        'mousewheel': function(e) {
            if (e.target.id == 'el') return;
            e.preventDefault();
            e.stopPropagation();
            if (e.originalEvent.wheelDelta >= 0) {
              $.throttle(1000,that.scrollSlider('up'));
            }
            else {
              $.throttle(1000,that.scrollSlider('down'));
            }
        }
      });
    };

    Phone.prototype.scrollSlider = function(direction) {
      if (direction == 'up') {
        this.$.slides.css('transform','translateY(0%)');
      }
      else {
        this.$.slides.css('transform','translateY(-100%)');
      }
    };

    var phone = new Phone();
  }
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
      margin: 30px auto
      border-radius: 50%
      &.active
        background-color goldHer
  .icon-fs
    display block
    position absolute
    bottom 20px
    left 20px
    font-size 55px
    color goldHer
.main-call
  width: calc(100% - 90px)
  text-align: center
  float left
  height: 100%
  overflow: scroll
  .slides-container
    width 100%
    height 300%
    .slide
      width: 100%
      height 33.33%
      transform translateY(-0%)
      transition all 1s
      &.first-slide
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
      &.second-slide
        .content
          position relative
          top 50%
          transform translateY(-50%)
          > div
            display inline-block
            color goldHer
            font-size 50px
            padding 20px
            position relative
            &:after
              content ''
              position absolute
              bottom 0px
              left 0
              display block
              width 100%
              height 10px
              background-repeat no-repeat
              background-position center center
              background-size contain
              background-image url('/static/shadow.png')
      &.third-slide
        .content
          position relative
          top 50%
          transform translateY(-50%)
          .call-input
            background-color goldHer
            width 270px
            margin: auto
            font-family geoBook
            font-size 30px
            color white
            border-radius: 26.5px
            height 53px
            line-height 53px
            letter-spacing 0.06em
          .buttons
            width 270px
            margin auto
            text-align left
            margin-top 10px
            clearfix()
            margin-bottom 30px
            div
              text-align center
              float left
              background-color: #e0e0e0
              width 48px
              height 48px
              line-height 48px
              color white
              border-radius 50%
              font-size: 25px
              margin-right: 15px
          .pad
            clearfix()
            width 270px
            margin auto
            .keypad
              float left
              border 2px solid goldHer
              border-radius: 50%
              height: 68px
              width 68px
              margin-right 27px
              margin-bottom: 15px
              line-height 68px
              color goldHer
              text-align center
              font-family geoBook
              font-size 30px
              &:nth-child(3n)
                margin-right 0px
              &:hover
                background-color goldHer
                color white
          .contacts
            border-top 1px solid #e9e9e9
            width: 100%
            .onscreen
              width 270px
              margin auto
              clearfix()
              .contact
                float left
                width 135px
                position relative
                margin-top 10px
                .photo
                  width 66px
                  height 66px
                  background-image url('/static/contact-1.png')
                  margin auto
                .icon-ic_call_black_24px
                  border-radius 50%
                  width 42px
                  height 42px
                  background-color goldHer
                  color white
                  text-align center
                  line-height 42px
                  position absolute
                  top 10px
                  right 10px
                .name
                  color greyHer
                  padding 0px
                  margin 10px 0 0 0
                .number
                  color #e9e9e9
                  padding 0
                  margin 0
</style>