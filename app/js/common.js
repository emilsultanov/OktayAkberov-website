


let _window = $(window);
let _window_width = $(window).width();

$(window).resize(function () {
   _window_width = $(this).width();
});
$(window).trigger('resize');


$('.menu__link').click(function (event) {
   event.preventDefault();
   let _menu_link = $(this);

   if (_window_width <= 360) {
      _menu_link.closest('.menu__wrapper').fadeOut(300);
   }
});



$(document).ready(function () {



   $(".lightgallery").lightGallery(); 





   $('.menu__link').click(function (event) {
      event.preventDefault();

      let _nav__position = $(this).closest('.nav__position').outerHeight();

      $('body,html').animate({
         scrollTop: ($(this.hash).offset().top - _nav__position)
      }, 100);

   });



   // Init Memories slider
   var swiper = new Swiper('.memories__container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 900,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      autoplay: {
         delay: 5000,
      },
   });


   var swiper = new Swiper('.books__container', {
      speed: 900,
      loop: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      // 	delay: 5000,
      // },
   });





   let gallery__item = $('.gallery__list .gallery__item');
   let first_gallery_item = gallery__item.eq(0);

   first_gallery_item.addClass('gallery__item_active');
   first_gallery_item.find('.magic_line').addClass('magic_line_active');


   let lightgallery__wrapper=$('.lightgallery__wrapper');
   let first_lightgallery__wrapper=$('.lightgallery__wrapper').eq(0);

   first_lightgallery__wrapper.fadeIn(300);


   gallery__item.click(function () {
      gallery__item.removeClass('gallery__item_active');
      gallery__item.find('.magic_line').removeClass('magic_line_active');
      $(this).addClass('gallery__item_active');
      $(this).find('.magic_line').addClass('magic_line_active');

      let index=$(this).index();

      lightgallery__wrapper.fadeOut(300)
      lightgallery__wrapper.eq(index).fadeIn(300)

      // var selector = $(this).attr('data-filter');
      // $('.gallery__row').isotope({ filter: selector });
      // return false;
   });


   $('.icon-menu,.icon-cancel').on('click', function () {
      $('.menu__wrapper').stop(true, true).fadeToggle(300)
   });


});





