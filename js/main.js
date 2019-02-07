$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});



$(window).scroll(function() {
var height = $(window).scrollTop();
if(height > 30){
$('.menu').addClass('style-menu');
} else{
$('.menu').removeClass('style-menu');
}
});

$(".scroll-item").click(function(event){   
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
});


  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       180,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

var animationStared = false;
$(window).scroll(function() {
  if (animationStared) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_1').height() + $('#Capa_1').offset().top) {
    $('#p1')[0].beginElement();
    $('#p2')[0].beginElement();
    $('#p3')[0].beginElement();
    $('#p4')[0].beginElement();
    animationStared = true
  }
});


var animationStared1 = false;
$(window).scroll(function() {
  if (animationStared1) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_2').height() + $('#Capa_2').offset().top) {
    $('#h1')[0].beginElement();
    $('#h2')[0].beginElement();
    $('#h3')[0].beginElement();
    animationStared1 = true
  }
});

var animationStared2 = false;
$(window).scroll(function() {
  if (animationStared2) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_3').height() + $('#Capa_3').offset().top) {
    $('#c1')[0].beginElement();
    $('#c2')[0].beginElement();
    $('#c3')[0].beginElement();
    $('#c4')[0].beginElement();
    $('#c5')[0].beginElement();
    $('#c6')[0].beginElement();
    $('#c7')[0].beginElement();
    $('#c8')[0].beginElement();
    $('#c9')[0].beginElement();
    $('#c10')[0].beginElement();
    $('#c11')[0].beginElement();
    $('#c12')[0].beginElement();
    animationStared2 = true
  }
});

var animationStared3 = false;
$(window).scroll(function() {
  if (animationStared3) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_4').height() + $('#Capa_4').offset().top) {
    $('#a1')[0].beginElement();
    $('#a2')[0].beginElement();
    $('#a3')[0].beginElement();
    animationStared3 = true
  }
});

var animationStared4 = false;
$(window).scroll(function() {
  if (animationStared4) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_5').height() + $('#Capa_5').offset().top) {
    $('#b1')[0].beginElement();
    $('#b2')[0].beginElement();
    $('#b3')[0].beginElement();
    $('#b4')[0].beginElement();
    $('#b5')[0].beginElement();
    $('#b6')[0].beginElement();
    $('#b7')[0].beginElement();
    $('#b8')[0].beginElement();
    $('#b9')[0].beginElement();
    $('#b10')[0].beginElement();
    $('#b11')[0].beginElement();
    $('#b12')[0].beginElement();
    animationStared4 = true
  }
});

var animationStared5 = false;
$(window).scroll(function() {
  if (animationStared5) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_6').height() + $('#Capa_6').offset().top) {
    $('#v1')[0].beginElement();
    animationStared5 = true
  }
});

var animationStared6 = false;
$(window).scroll(function() {
  if (animationStared6) return;
  if ($(window).scrollTop() + $(window).height() > $('#Capa_7').height() + $('#Capa_7').offset().top) {
    $('#n1')[0].beginElement();
    $('#n2')[0].beginElement();
    $('#n3')[0].beginElement();
    $('#n4')[0].beginElement();
    $('#n5')[0].beginElement();
    $('#n6')[0].beginElement();
    animationStared6 = true
  }
});


$(document).ready(function(){
    $("#portfolio_grid").mixItUp();
    $(".click-scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
  });
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $loader   = $preloader.find('.loader');
            $body = $("body"),
            $htext = $(".h-text"),
        $body.removeClass("body1");
        $htext.removeClass("fade-text");
        $loader.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });
    $(".click").click(function(){
        $("#menu-fade").fadeIn(300);
        $("body").addClass("body1");
        // $(".menu").fadeOut(100);
        $(".menu").addClass("menu-slide");
    });
    $(".click1").click(function(){
        $("#menu-fade").fadeOut(300);
        $("body").removeClass("body1");
        // $(".menu").fadeIn(100);
        $(".menu").removeClass("menu-slide");
    });
});

$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    speed:2000,
    smartSpeed:2000,
    nav:true,
    responsive:{
        300:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});
});

$('.owl1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        300:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});



