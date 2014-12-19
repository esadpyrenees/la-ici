var dehors = {

    init:function(){

        sound.checkIfSoundIsInitialized('dehors');

        $images = $dehors.find('img');

        $images.each(function(i){
            
            // // jouer avec ça pour la taille des images
            // var myWidth = Math.round(Math.random() * 10) * 50 + 200;

            // $(this).css({
            //     'position':'absolute',
            //     // jouer avec le multiplicateur pour augmenter la variabilité du positionnement des images
            //     'top':Math.round(Math.random()*wheight*2),
            //     'left':Math.round(Math.random()*(wwidth - 20 - myWidth)),
            //     'width':myWidth
            // })
        });


        $images.on('click', function(i){
            
            
        })
    }
    
    
}