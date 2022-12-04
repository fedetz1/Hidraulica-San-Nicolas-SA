$(window).scroll(function() {
    if ($("#menu").offset().top >450) {
        $("#menu").addClass("colorfondo");
        $("#boton").addClass("transparente");
    }
    else{
        $("#menu").removeClass("colorfondo");
        $("#boton").removeClass("transparente");
    }
});
