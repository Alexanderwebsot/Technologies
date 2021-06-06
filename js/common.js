$(document).ready(function () {
  $('.modal-window__exit').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
  })
  $('.contacts-memo-img').on('click', function() {
    $('.modal-window').addClass('modal-window-active');
  })
  $('.burger-menu').on('click', function() {
    $('.modal-menu').addClass('modal-menu-active');
  })
  $('.modal-menu-close').on('click', function() {
    $('.modal-menu').removeClass('modal-menu-active');
  })
  $('.modal-window__btn').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    return false;
  })
  new WOW().init();
  $(".scroll-nav").on("click", 'a', function (event) {
    $('.modal-menu').removeClass('modal-menu-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.header-slider-top').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: $('.arrow__left'),
      nextArrow: $('.arrow__right'),
    });
  $('.header-slide').on('click', function() {
    $('.header-slide').removeClass('header-slide-active');
    $(this).addClass('header-slide-active');
    let count = $(this).index('.header-slide');
    $('.header-slider-top').slick('slickGoTo', count);
  })
  $('.header-slider-top').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.header-slide').removeClass('header-slide-active');
    let count = currentSlide;
    let element = $('.header-slide')[count]
    $(element).addClass('header-slide-active');
  });
  $('.news-block__btn-1').on('click', function() {
    $('html').addClass('body-scroll');
    $('.modal-news-1').addClass('modal-news-active');
    $('.dark-window').addClass('dark-window-active');

    iframe = $('.modal-news-1 iframe');
    console.log(iframe)
    iframe = iframe[0]
    let iframe_src = $(iframe).attr('data-src');
    $(iframe).attr('src', iframe_src);

    return false;
  })
  $('.news-block__btn-2').on('click', function() {
    $('html').addClass('body-scroll');
    $('.modal-news-2').addClass('modal-news-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.news-block__btn-3').on('click', function() {
    $('html').addClass('body-scroll');
    $('.modal-news-3').addClass('modal-news-active');
    $('.dark-window').addClass('dark-window-active');

    iframe = $('.modal-news-3 iframe');
    console.log(iframe)
    iframe = iframe[0]
    let iframe_src = $(iframe).attr('data-src');
    $(iframe).attr('src', iframe_src);

    return false;
  })
  $('.news-block__btn-4').on('click', function() {
    $('html').addClass('body-scroll');
    $('.modal-news-4').addClass('modal-news-active');
    $('.dark-window').addClass('dark-window-active');

    iframe = $('.modal-news-4 iframe');
    console.log(iframe)
    iframe = iframe[0]
    let iframe_src = $(iframe).attr('data-src');
    $(iframe).attr('src', iframe_src);

    return false;
  })
  $('.modal-news-close').on('click', function() {
    $('html').removeClass('body-scroll');
    $('.modal-news-wrapper').removeClass('modal-news-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })
  $(document).click( function(e){
      if ( $(e.target).closest('.modal-news').length ) {
          // клик внутри элемента 
          return;
      }
      $('html').removeClass('body-scroll');
      $('.modal-news-wrapper').removeClass('modal-news-active');
      $('.dark-window').removeClass('dark-window-active');
  });
});