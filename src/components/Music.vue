<template>
  <div class="module music-module">
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
    		<p class="music-info">Kanye West <span>- Fade</span></p>

    		<audio class="music-player" src="/static/musics/Fade.mp3"></audio>

    		<div class="audio-controls">

    			<div class="audio-ctrl icon-ic_shuffle_black_36px"></div>
    			<div class="audio-ctrl icon-ic_skip_previous_black_24px"></div>
    			<div class="audio-ctrl play-audio icon-ic_play_arrow_black_24px"></div>
    			<div class="audio-ctrl icon-ic_skip_next_black_24px"></div>
    			<div class="audio-ctrl icon-ic_repeat_black_36px"></div>
    			
    		</div>

    		<div class="progress">
    			<span class="current">0:00</span>
    			<div class="progress-bar">
    				<div class="progress-bar-current"></div>
    			</div>
    			<span class="duration">0:00</span>
    		</div>

    	</div>

    	<div class="music-right">
    		<div class="playlist-music active" data-name="Fade">
    			<div class="is-playing icon-ic_play_arrow_black_24px"></div>
    			<p class="song-name">Fade</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">3:08</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="Famous">
    			<p class="song-name">Famous</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">3:08</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="Feedback">
    			<p class="song-name">Feedback</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">2:31</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="Freestyle">
    			<p class="song-name">Freestyle</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">1:58</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="Highlights">
    			<p class="song-name">Highlights</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">3:14</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="LowLights">
    			<p class="song-name">Low Lights</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">2:07</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    		<div class="playlist-music" data-name="Wolves">
    			<p class="song-name">Wolves</p>
    			<p class="song-artist">Kanye West</p>
    			<p class="song-duration">3:51</p>
    			<div class="song-add icon-ic_add_circle_outline_black_24px"></div>
    		</div>
    	</div>
    	
    </div>
  </div>
</template>

<script>
  
export default {

  name: "music-component",

  ready : function() {

  	var Music = function() {
  		this.init();
  	}

  	Music.prototype.init = function() {

  		this.$             = {};
  		this.$.musicModule = $('.music-module');
  		this.$.audio       = this.$.musicModule.find('.music-player');
  		this.$.btnPlay     = this.$.musicModule.find('.play-audio');
  		this.$.current     = this.$.musicModule.find('.current');
  		this.$.totalTime   = this.$.musicModule.find('.duration');
  		this.$.progress    = this.$.musicModule.find('.progress-bar');
  		this.$.progressBar = this.$.musicModule.find('.progress-bar .progress-bar-current');
  		this.$.song        = this.$.musicModule.find('.playlist-music');
  		this.$.currentSong = this.$.musicModule.find('.music-info span');
  		this.$.shufflePlay = this.$.musicModule.find('.icon-ic_shuffle_black_36px');
  		this.$.loopPlay    = this.$.musicModule.find('.icon-ic_repeat_black_36px');
  		this.$.next        = this.$.musicModule.find('.icon-ic_skip_next_black_24px');
  		this.$.prev        = this.$.musicModule.find('.icon-ic_skip_previous_black_24px')

  		this.initEvents();
  	}

  	Music.prototype.initEvents = function() {

  		var that = this;

  		this.$.audio[0].addEventListener('loadedmetadata', $.proxy(this.getDuration, this));

  		this.$.audio[0].addEventListener('timeupdate', $.proxy(this.updateCurrentTime, this));

  		this.$.audio[0].addEventListener('ended', $.proxy(this.playNext, this));

  		this.$.btnPlay.on('click', $.proxy(this.play, this));
  		this.$.shufflePlay.on('click', $.proxy(this.shuffle,this));
  		this.$.loopPlay.on('click', $.proxy(this.loop, this));
  		this.$.progress.on('click', $.proxy(this.moveTo, this));
  		this.$.next.on('click', $.proxy(this.playNext, this));
  		this.$.prev.on('click', $.proxy(this.playPrev,this));

  		this.$.song.on('click', function() {
  			var songName     = $(this).children('.song-name').text(),
  					songSrc      = $(this).attr('data-name'),
  					baseSrc      = '/static/musics/';

  			that.$.song.removeClass('active');
  			$(this).addClass('active');
  			that.$.song.children('.is-playing').remove();
  			$(this).prepend('<div class="is-playing icon-ic_play_arrow_black_24px" _v-ab657ffc></div>');
  			that.$.currentSong.html('- ' + songName);
  			that.$.audio.attr('src', baseSrc + songSrc + '.mp3');
  			setTimeout(function() {
  				that.getDuration();
  			}, 100);
  			that.$.audio[0].play();
  		})
  	}

  	Music.prototype.moveTo = function(e) {
  		var ratio = e.offsetX / this.$.progress.outerWidth(),
  				duration = this.$.audio[0].duration,
  				current  = duration * ratio;

  		this.$.audio[0].currentTime = current;
  	}

  	Music.prototype.playNext = function() {
  		var nextSrc  = $('.playlist-music.active').next().attr('data-name'),
  				firstSrc = $('.playlist-music').first().attr('data-name'),
  				baseSrc  = '/static/musics/';


  			if ($('.playlist-music.active').next().length > 0){ 

		  		$('.playlist-music.active').addClass('fill');
		  		$('.playlist-music.active').next().addClass('active').prepend('<div class="is-playing icon-ic_play_arrow_black_24px" _v-ab657ffc></div>');
		  		$('.playlist-music.active.fill').children('.is-playing').remove();
		  		$('.playlist-music.active.fill').removeClass('active fill');
		  		this.$.currentSong.html($('.playlist-music.active').children('.song-name').text());
		  		this.$.audio.attr('src', baseSrc + nextSrc + '.mp3');
		  		this.$.audio[0].play();
		  	}

		  	else if (this.$.loopPlay.hasClass('active') && $('.playlist-music.active').next().length == 0){
	  		$('.playlist-music.active').addClass('fill');
	  		$('.playlist-music').first().addClass('active').prepend('<div class="is-playing icon-ic_play_arrow_black_24px" _v-ab657ffc></div>');
	  		$('.playlist-music.active.fill').children('.is-playing').remove();
	  		$('.playlist-music.active.fill').removeClass('active fill');
	  		this.$.currentSong.html($('.playlist-music.active').children('.song-name').text());
	  		this.$.audio.attr('src', baseSrc + firstSrc + '.mp3');
	  		this.$.audio[0].play();
	  	}

  	}

  	Music.prototype.playPrev = function() {
  		var nextSrc = $('.playlist-music.active').prev().attr('data-name'),
  				lastSrc = $('.playlist-music').last().attr('data-name'),
  				baseSrc = '/static/musics/';

  		if ($('.playlist-music.active').prev().length > 0) {

	  		$('.playlist-music.active').addClass('fill');
	  		$('.playlist-music.active').prev().addClass('active').prepend('<div class="is-playing icon-ic_play_arrow_black_24px" _v-ab657ffc></div>');
	  		$('.playlist-music.active.fill').children('.is-playing').remove();
	  		$('.playlist-music.active.fill').removeClass('active fill');
	  		this.$.currentSong.html($('.playlist-music.active').children('.song-name').text());
	  		this.$.audio.attr('src', baseSrc + nextSrc + '.mp3');
	  		this.$.audio[0].play();
	  	}

	  	else if (this.$.loopPlay.hasClass('active') && $('.playlist-music.active').prev().length == 0){
	  		$('.playlist-music.active').addClass('fill');
	  		$('.playlist-music').last().addClass('active').prepend('<div class="is-playing icon-ic_play_arrow_black_24px" _v-ab657ffc></div>');
	  		$('.playlist-music.active.fill').children('.is-playing').remove();
	  		$('.playlist-music.active.fill').removeClass('active fill');
	  		this.$.currentSong.html($('.playlist-music.active').children('.song-name').text());
	  		this.$.audio.attr('src', baseSrc + lastSrc + '.mp3');
	  		this.$.audio[0].play();
	  	}

  	}

  	Music.prototype.shuffle = function() {
  		this.$.shufflePlay.toggleClass('active');
  	}

  	Music.prototype.loop = function() {
  		this.$.loopPlay.toggleClass('active');
  	}

  	Music.prototype.getDuration = function() {
  		var duration = this.$.audio[0].duration,
  				minutes  = Math.floor(duration / 60),
  				seconds  = Math.floor(duration - (minutes * 60));

  		if (seconds < 10) {
  			seconds = '0' + seconds;
  		}

  		this.$.totalTime.html(minutes + ':' + seconds);
  	}

  	Music.prototype.updateCurrentTime = function() {
  		var currentTime = Math.ceil(this.$.audio[0].currentTime),
  				currentMin  = Math.floor(currentTime / 60),
  				currentSec  = Math.floor(currentTime - currentMin * 60),
  				duration    = this.$.audio[0].duration,
  				percent     = (currentTime * 100) / duration;

  		if (currentSec < 10)
  			currentSec = '0' + currentSec;

  		this.$.current.html(currentMin + ':' + currentSec);
  		this.$.progressBar.css('width', percent+'%');
  	}

  	Music.prototype.play = function() {
  		if(this.$.audio[0].paused) {
	  			this.$.audio[0].play();
	  		}
	  		else {
	  			this.$.audio[0].pause();
	  		}
  	}

  	var music = new Music();
  }
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
		.audio-controls
			position relative
			text-align center
			margin-top 60px
			.audio-ctrl
				display inline-block
				font-size 38px
				color #d1d1d1
				cursor pointer
				&.icon-ic_shuffle_black_36px
						margin-right 60px
				&.icon-ic_skip_previous_black_24px
					margin-right 5px
				&.icon-ic_play_arrow_black_24px
					width 66px
					height 66px
					border-radius 50%
					border 5px solid #fa9698
					text-align center
					line-height 66px
					margin-right 5px
					background-color redHer
					color white
				&.icon-ic_skip_next_black_24px
					margin-right 60px
				&.active
					color redHer
		.progress
			text-align center
			margin-top 60px
			span
				display inline-block
				vertical-align middle
				font-size 22px
				font-family geoBook
				color #d3d3d3
				&.current
					width 9%
			.progress-bar
				display inline-block
				vertical-align middle
				width 214px
				height 4px
				margin-left 18px
				margin-right 20px
				background-color #f6f6f6
				position relative
				.progress-bar-current
					position absolute
					top 0
					left 0
					width 0%
					height 4px
					background-color redHer
					&:after
						content ''
						position absolute
						right -2px
						top -3px
						display block
						width 6px
						height 6px
						border-radius 50%
						background-color #fff
						border 2px solid redHer
	.music-right
		float left
		width 50%
		position relative
		overflow-y scroll
		.playlist-music
			position relative
			height 67px
			line-height 67px
			width 100%
			color #cccaca
			font-family geoBook
			font-size 24px
			text-align center
			cursor pointer
			&.active
				font-family geoMed
				color #9b9797
			&:nth-child(even)
				background-color #fafafa
			p
				display inline-block
				margin 0
				text-align center
				&.song-name
					width 30%
					text-align left
				&.song-artist
					width 30%
				&.song-duration
					width 20%
			.song-add
				display inline-block
				width 7%
			.is-playing
				position absolute
				color redHer
				font-size 16px
				top 50%
				transform translateY(-50%)
</style>