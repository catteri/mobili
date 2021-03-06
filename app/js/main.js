$(function () {

  $('.shop__filter-btn').on('click', function() {
    $('.shop-filter').slideToggle();
  });

  $('.new__btn').on('click', function() {
    $('.new__list').toggleClass('new__list--active')
  });


  $('.products__mixitup-btn').on('click', function() {
    $('.products__list').toggleClass('products__list--active')
  });

  $('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  });
  

  $('.description-tabs__top-item').on('click', function (e) {
    
    e.preventDefault();
    $('.description-tabs__top-item').removeClass('description-tabs__top-item--active');
    $(this).addClass('description-tabs__top-item--active');

    $('.description-tabs__content-item').removeClass('description-tabs__content-item--active');
    $($(this).attr('href')).addClass('description-tabs__content-item--active');


  });

  $('.select-style, .modal-form__checkbox').styler();

  $('.related-slider').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows-one slider-arrows__left" src="images/icons/arrow-left-product.svg" alt="prew"></a>',
    nextArrow: '<img class="slider-arrows-one slider-arrows__right" src="images/icons/arrow-right-product.svg" alt="next"></a>',
    responsive: [
    {
      breakpoint: 1050,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
    });

  $('.select-style, .product-one__filter-num').styler();


   $('.product-slider__inner-thumb').slick({
    asNavFor: '.product-slider__inner-big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slider__inner-big').slick({
    asNavFor: '.product-slider__inner-thumb',
    draggable: false,
    arrows: false,
    fade:true
  });

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
    controls : 0,
    showinfo : 0
  },
  vimeo : {
    color : 'f00'
  }
});

  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:28.064869761324896, lng: -82.29926301791274 },
    zoom: 8,
  });
  }


  var mixer = mixitup('.products__inner');
  var mixer = mixitup('.new__inner');
  
});