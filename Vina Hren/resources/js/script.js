$(document).ready(function(){
    /*Sticky navigation*/
    $('.js--section-bajka').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{
        offset:'140px;'
    });
    
    /*-----Mobile nav------*/
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        var icon=$('.js--icon');
        nav.slideToggle(200);
    });

    /*-----Vina----- */
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-7').waypoint(function(direction){
        $('.js--wp-7').addClass('animated fadeInDown');
    },{
        offset:'75%;'
    });

    $('.js--wp-8').waypoint(function(direction){
        $('.js--wp-8').addClass('animated fadeInUp');
    },{
        offset:'75%;'
    });

    /* Stranica vina-vina*/
    $('.js--wp-9').waypoint(function(direction){
        $('.js--wp-9').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    $('.js--wp-10').waypoint(function(direction){
        $('.js--wp-10').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    $('.js--wp-11').waypoint(function(direction){
        $('.js--wp-11').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    $('.js--wp-12').waypoint(function(direction){
        $('.js--wp-12').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    $('.js--wp-13').waypoint(function(direction){
        $('.js--wp-13').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    $('.js--wp-14').waypoint(function(direction){
        $('.js--wp-14').addClass('animated fadeIn');
    },{
        offset:'100%;'
    });

    /*-----Pojedinacna vina-------- */

    $('.js--wp-15').waypoint(function(direction){
        $('.js--wp-15').addClass('animated fadeInLeft');
    },{
        offset:'80%;'
    });
    $('.js--wp-16').waypoint(function(direction){
        $('.js--wp-16').addClass('animated fadeInRight');
    },{
        offset:'80%;'
    });

    
});