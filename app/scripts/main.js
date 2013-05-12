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

    scroll();

    $(".mt-upload-open").on("click", function(){
        $(".mt-gallery-content").load('upload.html');
        window.location.hash = ('upload');
    });

    $(".mt-album-over-circle, .mt-viewer-open").on("click", function(event){
        event.preventDefault();
        $(".mt-gallery-content").load('photos.html');
        window.location.hash = ('albumName/photos');
    });

    // TEST ONLY
    var max = 4;

    for (var i = 0; i < max; i++) {
        $(".mt-album").clone().appendTo(".mt-album-gallery");
    }

    for (var i = 0; i < max; i++) {
        $(".mt-photo").clone().appendTo(".mt-photo-gallery");
    }
    
    var NbAlbum = $('.mt-album').size();
    console.log(NbAlbum);

}());
