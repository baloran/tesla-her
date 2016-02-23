<template>
  <div class="module">
    <div class="sidebar">
    	<div class="icon-music"></div>

    	<div class="music-options">
    		<div class="sidebar-icons icon-ic_search_black_24px"></div>
    		<div class="sidebar-icons icon-ic_library_music_black_24px"></div>
    		<div class="sidebar-icons icon-ic_radio_black_36px"></div>
    		<div class="sidebar-icons icon-ic_queue_music_black_24px"></div>
    	</div>

    	<div class="icon-fs"></div>

    </div>
    <div class="main-music">

    	<div class="bg-music">
    		<div class="close-btn"></div>
    		<div class="artist-pic"></div>
    	</div>

    	<div class="music-left">
    		<p class="music-info">Lily Rose <span>- Look at them</span></p>
    		<audio src="/static/musics/kanyewest-no_more_parties_in_la.mp3"></audio>
    		<div class="audio-controls">
    			
    		</div>
    	</div>

    	<div class="music-right"></div>
    	
    </div>
  </div>
</template>

<script>
  
export default {

  name: "music-component"
}

</script>

<style lang="stylus" scoped>

@import "../reset.styl"
@import "../variables"

.sidebar
	height 100%
	width 90px
	position relative
	box-shadow greyHer
	box-shadow: 0px 10px 27px 3px rgba(0, 0, 0, 0.05);
	overflow auto
	float left
	.icon-music
		width 46px
		height 46px
		background-color goldHer
		display block
		border-radius 50%
		color white
		line-height 46px
		text-align center
		font-size 22px
		position relative
		margin 20px auto
		&:before
			margin-left -2px
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
	.music-options
		text-align center
		font-size 34px
		color greyHer
		margin-top 70px
		.sidebar-icons
			cursor pointer
			margin 30px 0
	.icon-fs
		position absolute
		bottom 20px
		left 50%
		transform translateX(-50%)
		font-size 50px
		color goldHer
.main-music
	width calc(100% - 90px)
	height 100%
	float left
	position relative
	.bg-music
		width 100%
		height 137px
		background-image url('/static/music-bg.png')
		background-size cover
		position relative
		.close-btn
			position absolute
			cursor pointer
			right 20px
			top 10px
			width 20px
			height 26px
			&:before, &:after
				content ''
				position absolute
				height 26px
				width 5px
				left 8px
				background-color goldHer
			&:before
				transform rotate(45deg)
			&:after
				transform rotate(-45deg)
		.artist-pic
			position absolute
			left 172px
			top 60px
			width 140px
			height 140px
			border-radius 50%
			border: 7px solid #fff
			background-image url('/static/music-artist.png')
	.music-left
		position relative
		float left
		width 50%
		.music-info
			font-family geoMed
			font-size 28px
			color #9b9797
			text-align center
			margin-top 110px
			span
				font-family geoBook
				color #cccaca


</style>