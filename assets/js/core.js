$(document).ready(function(){
  
  $('.hero-slick').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    arrows: false,
    dots: true,
    mobileFirst: true,
  });

  $('.currency-slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    dots: false,
    mobileFirst: true,
  });

  $('.article-slick').slick({
    autoplay: false,
    lazyLoad: 'ondemand',
    infinite: false,
    slidesToShow: 1.5,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    mobileFirst: true,
  });

  // $('.slick-title').css('width', $('.slick-item img').width());

});