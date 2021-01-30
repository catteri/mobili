$(function () {

  $( '.btn1' ).on('click', function(){ 
    $('.add-btn-1').css("display", "block").addClass('.add-btn-1--active'); 
  });

  $( '.btn2' ).on('click', function(){ 
	  $('.add-btn-2').css( "display", "block" ).toggleClass('.add-btn-2--active'); 
  });

  $( '.btn3' ).on('click', function(){ 
	  $('.add-btn-3').css( "display", "block" ).toggleClass('.add-btn-3--active'); 
  });

  $( '.btn4' ).on('click', function(){ 
	  $('.add-btn-4').css( "display", "block" ).toggleClass('.add-btn-4--active'); 
  });
  
   $('.shop-content__btn-buy').on('click', function () {
    $('.shop-content__btn-buy').removeClass('shop-content__btn-buy--active');
    $(this).addClass('shop-content__btn-buy--active');
  });

  $('.shop-star').rateYo({
    ratedFill: "#ffcc00"
  });
  
  $(".shop-filter__price-input").ionRangeSlider({
        type: "double",
        min: 100,
        max: 999,
        from: 300,
        to: 800,
        grid: false
    });



    $('.top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay:true
    });
  
  $('[data-fancybox]').fancybox({
        youtube : {
            controls: 0,
            showinfo: 0,
            autoplay:true
        }
    });
  
});