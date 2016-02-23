<template>
  <div class="module">
    <div class="sidebar">
    	<div class="icon-music"></div>
    	<div class="music-options">
    		<div class="icon-ic_search_black_24px"></div>
    		<div class="ic_library_music_black_24px"></div>
    		<div class="ic_library_music_black_24px"></div>
    		<div class="ic_queue_music_black_24px"></div>
    	</div>
    	
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

</style>