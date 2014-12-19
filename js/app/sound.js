var durationToPx = 1.2;

var sound = {

	init : function(){
		sound.initPlayers();
		sound.swipe();
		$('#sons').css('z-index', 6000)
	},

	checkIfSoundIsInitialized:function(section_name){
		if(is_sound_initialized==false){
            sound.init();   
            mouse.init();   
            is_sound_initialized = true;          
            sound.playfirst(section_name);
        }

        
	},

	initPlayers : function(){

		$('.sound-section').each(function(s){
			var $section = $(this),
				section_name = $section.attr('data-section'),
				section_url = $section.attr('data-section-url'),
				$sounds = $section.find('.son');
				
				players[s]=[];

			$sounds.each(function(i){
				var $this = $(this),
					src = $this.attr('data-src'),
					duration = $this.attr('data-duration');

				var $audio = $('<audio src='+ src +'></audio>');
				$this.append($audio);
				
				var player = new MediaElementPlayer($audio,{
					features: ['playpause','progress'],
					audioWidth: Math.round(duration*durationToPx),
					
					success: function(media, node, player) {
						
						media.addEventListener('play',function(){
							current_player = player;
							$(player.container).addClass('playing');
							if( $current_page[0].id != section_name){
								pages.loadPage(section_url, $("#" + section_name));
							}
						});

						media.addEventListener('pause',function(){
							$(player.container).removeClass('playing').css('opacity', 'auto');
						})
					}
				});
				players[s].push(player)
			})
		})
		
	},

	fadeSound:function(){
		
	},

	playfirst: function(section_name){
		if(section_name=='avant'){
			players[0][0].play()
		}
		if(section_name=='dehors'){
			players[1][0].play()
		}
		if(section_name=='dedans'){
			players[2][0].play()
		}
		
		
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