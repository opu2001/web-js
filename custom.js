$(function(){ 

    var mixer = mixitup('.pro_mixi');


    // venobox start
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
    // venobox  end 
    // counter up start 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    }); 
    // counter up end


    $('.recent_main').slick({
        dots: false,
        arrows:true,
        infinite: true,
        autoplay:true,
        speed: 300,
        prevArrow:".pre",
        nextArrow:".next",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
    
        ]
      });

//  back to top and nav bar 

$(".back2top").click(function(){
  $("html, body").animate({
      scrollTop:0
  }, 1000)
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 50){
      $(".menu_bar").addClass("menu_ng");
  }else{
      $(".menu_bar").removeClass("menu_ng");
  }
  if(scrolling > 30){
      $(".back2top").fadeIn(500);
  }else{
      $(".back2top").fadeOut(500); 
  }
});

// back to top end 
// animation scroll 
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function (event) {
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500, function () {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});  
// animation scrol end





});