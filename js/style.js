$( document ).ready(function() {

    $("input[name='my-tel']").mask("+38(999) 999-99-99");

    $('[data-fancybox]:not(.slick-cloned)').fancybox();


    $(".modal-inline").fancybox({
    closeBtn: false,
    modal: true,
    margin: 0,
    padding: 20,
    maxWidth: 400,
    autoScale: true,
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'inline',
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

    /*loadSvg*/
    $('[data-svg]').each(function(){
        var $this = $(this);
        var $svg = $this.data('svg');
        var $filename = $svg.split('\\').pop().split('/').pop().replace(".svg", "");

        $this.load($svg, function(responseTxt, statusTxt){
            if(statusTxt == "success"){
                $this.find('svg').addClass('svg svg-'+$filename+'');
            }
        });
    });
    thumbImg();
    /*menu*/
    // $('.header__toggle-menu').on('click', function () {
    //     var $this = $(this);
    //     $this.closest('.header').toggleClass('menu-open');
    // });

    $('.menu-btn').on('click', function () {
        $(this).find('.menu-open').toggleClass('hide');
        $(this).find('.menu-close').toggleClass('hide');

        $('.menu-wrap').toggleClass('open');

        $('body').toggleClass('overflow-hidden');
    });

    $('.menu__bar a').on('click', function () {
        $('.menu-wrap').removeClass('open');
        $('body').removeClass('overflow-hidden');

        $('.menu-btn').find('.menu-open').removeClass('hide');
        $('.menu-btn').find('.menu-close').addClass('hide');
    });



var $element = $(".process__content"); 


if($(window).width() > 768){
    $(window).scroll(function() {
        var $minusHeight = $element.height() / 16;
        var scroll = $(window).scrollTop() + $element.height();
        var offset = $element.offset().top + $element.height();
        var offset2 = $element.offset().top + $element.height() - $minusHeight;

      
        if (scroll > offset) {
           $(".process__auto").css({"top": ($(window).scrollTop() - $element.offset().top) + "px"}); 
        } 
        else{
            $(".process__auto").css({"top": "0rem"});
        }

        if($(window).scrollTop() > offset2 ) {
            $(".process__auto").css({"top": "1420px"}); 
            $(".process__auto").css({"bottom": "0rem"}); 
        }
    });
}

if($(window).width() < 768){
    $(".process__auto").css({"top": "20rem"}); 
}


/* Прокручивает страницу вверх при нажатии на кнопку */
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});



var $carImageWrap = $('.big-car-wrap');
let carCounter = 0;
    $(window).scroll(function() {
      var scrollEl = $(window).scrollTop() + $(window).height();
      //Если скролл до конца елемента
      var offsetEl = $element.offset().top + $element.height() + ($element.height() / 4);
      //Если скролл до начала елемента
      // var offsetEl = $element.offset().top + 300
     

      if (scrollEl > offsetEl && carCounter == 0) {
        $('.big-car-wrap').addClass('animate');
        carCounter = 1;
    }
});


$(window).on("load",function(){
    $(".custom-scroll-js").mCustomScrollbar({
        theme:"dark"
    });


});



    $('.auto-slider-js').slick({
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      responsive: [
        {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
                
            }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
                
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                
            }
        }
  ]


    });


    // 
    $('.auto-slider__images').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      
      // prevArrow: '<div class="prev"></div>',
      // nextArrow: '<div class="next"></div>',
     


    });

    // 

    $('.owl-carousel').slick({
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      swipe: true,
     infinite: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }

      ]
});




    $(".faq__item > .faq__head").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".faq-content")
        .slideUp(200);
    } else {
      $(".faq__item > .faq__head").removeClass("active");
      $(this).addClass("active");
      $(".faq-content").slideUp(200);
      $(this)
        .siblings(".faq-content")
        .slideDown(200);
    }
  });

});





$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    if($(window).width() < 767){
      var headerMobHeight = $('.header-mob').height();
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - headerMobHeight
      }, 1300);
    }
    else{
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1300);
    }
    
});



function thumbImg() {
    $('[data-thumb]').each(function () {
        var $this = $(this);
        var img = $this.find('img').attr('src');
        var size = $this.data('thumb');
        $this.css({
            'background-image': 'url(' + img + ')',
            'background-size': '' + size + ''
        });
    });
    return false;
}



