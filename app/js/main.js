$ (function () {
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