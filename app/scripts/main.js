(function(){   

    function scroll(){
        $("body").niceScroll({
            cursorborder: "",
            cursorcolor: "#ca1974",
            cursorborderradius: 0,
            cursorwidth: 10,
            scrollspeed : 100,
            touchbehavior : true,
            boxzoom: false,
            vertical: true
        });
    } 

    // $(document).ready(function(){
    //     var $window = $(window);
             
    //     $('[data-type="parallax"]').each(function(){
    //         var $this = $(this);
                            
    //         $(window).scroll(function() {
    //             var min = ($window.scrollLeft() == 0 );
    //             var xPos = - ($window.scrollLeft() / $this.data('speed') + 50);
    //             var coords = xPos + 0 + 'px';

    //             if(min){
    //                 $this.css({
    //                     left: 0
    //                 });
    //             }
    //             else {
    //                 $this.css({
    //                     left: coords
    //                 });
    //             }
    //         });
    //     }); 
    // });

    scroll();

    $(".mt-upload-open").on("click", function(){
        $(".mt-gallery-content").load('upload.html');
        window.location.hash = ('upload');
    });

    // TEST ONLY
    var max = 4;

    for (var i = 0; i < max; i++) {
        $(".mt-album").clone().appendTo(".mt-album-gallery");
    }
    
    var NbAlbum = $('.mt-album').size();
    console.log(NbAlbum);

}());
