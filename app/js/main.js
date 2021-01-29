$(function () {
  
   /*  $('.shop-filter__price-input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.shop-filter__price-from').text(data.from);
      $('.shop-filter__price-to').text(data.to);
        },
    onChange: function (data) {
      $('.shop-filter__price-from').text(data.from);
      $('.shop-filter__price-from').text(data.to);
        },

    }); */
  
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