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

function fondouwu(){    
    hola=document.getElementById("menu")
    if(menu.classList.contains("fondotrans")==false){
        $("#menu").addClass("fondotrans");
    }
    else{
        $("#menu").removeClass("fondotrans");
    }
}
