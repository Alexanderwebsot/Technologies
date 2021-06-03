$(document).ready(function () {
  $('.projects-slider-wrapper').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: $('.projects-arrow__l'),
	  nextArrow: $('.projects-arrow__r')
  });
  $('.team-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      prevArrow: $('.projects-arrow__l'),
      nextArrow: $('.projects-arrow__r'),
      responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: true,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
  $('.projects-slider-top').slick({
  	  infinite: false,
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  	  dots: false,
  	  arrows: false,
    });
  $('.projects-slid_1').on('click', function() {
  	$('.projects-slider-top').slick('slickGoTo', 0);
  	return false;
  })
  $('.projects-slid_2').on('click', function() {
  	$('.projects-slider-top').slick('slickGoTo', 1);
  	return false;
  })
  $('.projects-slid_3').on('click', function() {
  	$('.projects-slider-top').slick('slickGoTo', 2);
  	return false;
  })
  $('#ipt-file').on('change', function() {
  	let file = $('#ipt-file')[0].files[0]
  	if (file){
  	  $('.ipt-label-text')[0].innerHTML = file.name;
  	}
  })
  $('#select-request').selectize({
    create: false,
    sortField: 'text'
	});
  new WOW().init();
  function slickify(){
    $('.documents-row').slick({
  	  infinite: true,
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  	  dots: true,
  	  centerMode: true,
  	  variableWidth: true,
  	  prevArrow: $('.dc_l'),
  	  nextArrow: $('.dc_r')
    });
  }
  let $windowWidth = window.innerWidth;
  if ($windowWidth < 992) {
      slickify();   
  }
  $('.clients-slider').slick({
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: $('.prt_l'),
	  nextArrow: $('.prt_r'),
	  responsive: [
	      {
	        breakpoint: 992,
	        settings: {
	          centerMode: true,
	          variableWidth: true,
	          dots: true,
	        }
	      }
	      // You can unslick at a given breakpoint now by adding:
	      // settings: "unslick"
	      // instead of a settings object
	    ]
  });
});