( function( $ ) {

    $window = $(window);
    $slide = $('.homeSlide');



    /* Init Skrollr*/
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });

    /*Get window size*/
    winH = $window.height();

    /* Keep minimum height 550*/
    if(winH <= 550) {
        winH = 550;
    }

    /* Resize our slides*/
    $slide.height(winH);

} )( jQuery );