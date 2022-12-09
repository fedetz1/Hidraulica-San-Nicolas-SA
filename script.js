$(window).scroll(function() {
    if ($("#menu").offset().top >450) {
        $("#menu").addClass("bg-dark");
        $("#boton").addClass("transparente");
        $("#boton").addClass("bg-light");
    }
    else{
        $("#menu").removeClass("bg-dark");
        $("#boton").removeClass("transparente");
        $("#boton").removeClass("bg-light");
        
    }
});

function fondouwu(){    
    if(menu.classList.contains("fondotrans")==false){
        $("#menu").addClass("fondotrans");
    }
    else{
        $("#menu").removeClass("fondotrans");
    }

    
}

$("#items").click(function(){
    $('.navbar-collapse').collapse('hide');
    $("#menu").removeClass("fondotrans");
 });
