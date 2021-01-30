$(function () {

  /* $('.shop-content__btn-buy').on('click', function () {
        $('.shop-content__btn-buy').toggleClass('shop-content__btn-buy--active');
    }); */
  
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