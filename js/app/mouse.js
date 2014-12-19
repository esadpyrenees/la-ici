var wwidth = $(window).width(),
    wheight = $(window).height(),
    percent,
    volume=0.5;

var mouse = {

	
	init: function(){
		$('body').on('mousemove', function(e){

			percent = Math.round(e.pageY/wheight * 100);
			volume = percent/100;
			
			if(current_player != undefined){
				current_player.setVolume(volume);	
			}
			
			$('.mejs-audio.playing').css('opacity',percent/100)
			
			if(e.pageY>wheight/2){
				
			} else {
				
				
			}
		})
	}
}