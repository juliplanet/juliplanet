$(document).ready(function(){

    //Menu burger index
    $(".burger").click(function(){
        $(".menu-burger").animate({width:"toggle"},500)
    });

    $(".cerrar").click(function(){
        $(".menu-burger").animate({width:"toggle"},500)
    });

    $(".burger2").click(function(){
        $(".burger2").toggleClass("rotar")
        $(".menu-burger2").animate({width:"toggle"},500)
        $(".menu-burger2 a").toggleClass("aparicion")
    });

    $(".burger2").click(function(){
        $(".burger2").addClass("cierre")
    });
});