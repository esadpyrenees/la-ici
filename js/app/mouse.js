var wwidth = $(window).width(),
    wheight = $(window).height(),
    percent,
    volume=0.5;

var mouse = {

	
	init: function(){
		$('body').on('mousemove', function(e){

			percent = Math.round(e.pageY/wheight * 100);
			volume = 0.3 + ((percent/100)/1.66666);
			//console.log(volume)
			current_player.setVolume(volume);
			$('#sons').css('opacity',percent/100)
			$('.fragments').css('opacity',1-percent/100)
			
			if(e.pageY>wheight/2){
				
			} else {
				
				
			}
		})
	}
}