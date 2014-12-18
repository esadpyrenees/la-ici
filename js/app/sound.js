var durationToPx = 1.2;

var sound = {

	init : function(){
		sound.initPlayers();
		
		sound.swipe();
	},

	initPlayers : function(){
		$('.son').each(function(i){
			var $this = $(this),
				src = $this.attr('data-src'),
				duration = $this.attr('data-duration');

			var $audio = $('<audio src='+ src +'></audio>');
			$this.append($audio);
			

			players[i] = new MediaElementPlayer($audio,{
				features: ['playpause','progress'], //'current','duration'
				audioWidth: Math.round(duration*durationToPx),
				success: function(media, node, player) {
					
					media.addEventListener('play',function(){
						//
					});
					media.addEventListener('pause',function(){
						//
					})

					var s = setTimeout(function(){
						sound.playfirst();
					}, 400)
				}
			});

			
			
		})
	},

	playfirst: function(){
		players[0].play();
		current_player=players[0];
	},

	swipe:function(){
		var mySwiper = $('#sons').swiper({
			scrollContainer:true,
			mousewheelControl:true,
			mode:'horizontal',
			slidesPerView:'auto',
			freeMode:true,
		    //Scrollbar:
		    // scrollbar: {
		    //     container : '.swiper-scrollbar',
		    //     draggable : true,
		    //     hide: false,
		    //     //snapOnRelease: true
		    // }
		})
	}

}