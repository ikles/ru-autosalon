jQuery(document).ready(function( $ ) {



  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  


  $('.header__menu.mobile-menu').click(function () {
    $('.mobile-menu__overlay').addClass('active');    
  });
  $('.mobile-menu__overlay-close').click(function () {
    $('.mobile-menu__overlay').removeClass('active');    
  });
  

  $('.filter__button-mobile').click(function () {    
    const icon = $(this).find('.fa-solid');
    
    if (icon.hasClass('fa-plus')) {
      icon.removeClass('fa-plus').addClass('fa-solid fa-minus');
    } else if (icon.hasClass('fa-minus')) {
      icon.removeClass('fa-minus').addClass('fa-solid fa-plus');
    }
    
    let buttonText = $('.filter__button-mobile-text').text();
    let buttonOpenText = $('.filter__button-mobile-text').attr('data-text');
    $('.filter__button-mobile-text').text(buttonOpenText);
    $('.filter__button-mobile-text').attr('data-text', buttonText);
    $('.filter__more-selects').fadeToggle();
  });

  $('.main__slider-sl').slick({
    infinite: false,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    touchThreshold: 10,
    arrows: true,
    pauseOnHover: true,
    responsive: [

      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  
  $(function() {
    var $brandList = $('.brand__list');
    var $items = $brandList.find('.brand__item');
    var $button = $('.brand__list-btn.mobile-only');
    var $buttonText = $('.brand__list-btn.mobile-only span');
    var $buttonImg = $button.find('img');
    var isExpanded = false;
    var MOBILE_BREAKPOINT = 768;

    function updateVisibility() {
      var windowWidth = $(window).width();
      var totalItems = $items.length;

      if (windowWidth <= MOBILE_BREAKPOINT) {
      // Мобильный режим
        $button.show();

        if (!isExpanded) {
        // Показываем только первые 6 элементов
          $items.each(function(index) {
            if (index >= 6) $(this).hide();
            else $(this).show();
          });
          $buttonText.text('Показать еще');
          $buttonImg.removeClass('rotate180');
        } else {
        // Показываем все элементы
          $items.show();
          $buttonText.text('Скрыть');
          $buttonImg.addClass('rotate180');
        }

      // Если элементов меньше или равно 6 – кнопка не нужна
        if (totalItems <= 6) $button.hide();
      } else {
      // Десктопный режим: всё показываем, кнопку прячем
        $items.show();
        $button.hide();
      // Сбрасываем состояние при переходе на десктоп
        isExpanded = false;
        $buttonText.text('Показать еще');
        $buttonImg.removeClass('rotate180');
      }
    }

  // Клик по кнопке
    $button.on('click', function(e) {
      e.preventDefault();
      if ($(window).width() > MOBILE_BREAKPOINT) return;
      isExpanded = !isExpanded;
      updateVisibility();
    });

  // При изменении размера окна
    $(window).on('resize', function() {
      updateVisibility();
    });

  // Запуск при загрузке
    updateVisibility();
  });


  (function() {
    const $select = $('.model-card__mod-select select');
    const $paramLists = $('.model-сharacteristics__text .model-сharacteristics__params');
    function sync() {
      $paramLists.hide().eq($select.prop('selectedIndex')).show();
    }
    $select.on('change', sync);
    sync();
  })();



  $('.modal, .modal__close').click(function () {
    $('.modal').fadeOut();    
  });

  $('.modal__content, .modal-content').click(function (e) {
    e.stopPropagation();
  });

  
  $('.button-modal.callback-fixed, .model__controls .button-modal.trade').click(function () {
    $('.modal-1').fadeIn();
  });


  $('.base-button.button-modal.comp').click(function () {
    $('.modal-2').fadeIn();
  });

  $('.base-button.button-modal.credit').click(function () {
    $('.modal-3').fadeIn();
  });
  





  $('.modal-close').click(function () {
    $(this).closest('.modal-overlay').fadeOut();
  });

  $('.modal-overlay').click(function () {
    $(this).fadeOut();
  });


  $('.header__call-link, .header__top-phone-link').click(function () {
    $('.modal-overlay-2').fadeIn();
  });
  




  (function() {
    const $colorBars = $('.color__bar-item');
    const $modelImages = $('.model__left .model__img');
    const $colorNames = $('.car__name-color');
    $colorBars.click(function() {
      const index = $colorBars.index(this);
      $modelImages.hide();
      $colorNames.hide();
      $modelImages.eq(index).show();
      $colorNames.eq(index).show();
    });
  })();


  (function() {
    const $tabButton = $('.tabs__header.section__header .tabs__header-item');
    const $tabElem = $('.tabs__body .tab__elem');

    $tabButton.click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      const index = $tabButton.index(this);
      $tabElem.hide();
      $tabElem.eq(index).show();
    });
  })();


  
  
  

  $('.modifications__item').each(function () {
    const header = $(this).find('.modifications__item-head');
    header.click(function () {
      $(this).toggleClass('close').next().slideToggle();
    });
  });

  //.tabs__header.section__header .tabs__header-item

  //.tabs__body #tab-1



  /*$('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 400);
    return false;
  });*/








}); //ready

