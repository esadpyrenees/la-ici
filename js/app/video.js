var video = {

	init : function(){
		BV = new $.BigVideo({useFlashForFirefox:false});
	    BV.init();
	    BV.show('media/video/entreelaici.mp4', {
	    	altSource:'media/video/entreelaici.ogv',
	    	ambient:true
	    });
	},


	newBigVideo: function(src){
		ogv = src.replace('mp4', 'ogv');
		BV.init();
		BV.show(src, {
	    	altSource:ogv,
	    	ambient:true
	    });
	},

	destroy:function(){
		BV.getPlayer().dispose();
	}
	
}