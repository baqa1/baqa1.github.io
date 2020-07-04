$(function(){
    $('.scheme-content__slider-wrapper').slick({
        vertical: true,
        slidesToShow: 3,
        // slidesToScroll: 2,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('.slider-prev__btn'),
        nextArrow: $('.slider-next__btn'),
        dots: true,
    });

    $('a').on('click', function(e) {
        e.preventDefault();
    });




    // menu scroll

    $("body").on('click', '.menu__list a', function(e){
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    $("body").on('click', '.hamburger-menu__content-menu a', function(e){
    var fixed_offset = 300;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });

    $("body").on('click', '.header-wrapper__content-downArrow a', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
    });


    // HISTORY POPUP
  
    let popupBtn = document.getElementById('historyPopupBtn');

    popupBtn.onclick = function(e) {
        e.preventDefault();
        swal({
          title: "Истори компании",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil dicta hic expedita optio, porro temporibus est ullam qui harum assumenda tempora minus non odit architecto magnam a? Accusamus nulla eius, sapiente, officiis debitis quidem accusantium tenetur voluptatem tempora, delectus quo nisi nostrum sequi numquam ipsam! Ipsum laborum praesentium modi velit. Quia quae fugit adipisci? Asperiores voluptatibus aspernatur ducimus nostrum, doloribus optio beatae animi hic, deserunt nulla enim iure sed rerum doloremque quibusdam eveniet? Dolore et dolorem odit veniam cumque soluta tempore cupiditate alias distinctio debitis, assumenda, aut possimus labore sunt odio eos amet! Quis aspernatur, fugit corrupti odio assumenda corporis nesciunt iusto possimus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil dicta hic expedita optio, porro temporibus est ullam qui harum assumenda tempora minus non odit architecto magnam a? Accusamus nulla eius, sapiente, officiis debitis quidem accusantium tenetur voluptatem tempora, delectus quo nisi nostrum sequi numquam ipsam! Ipsum laborum praesentium modi velit. Quia quae fugit adipisci? Asperiores voluptatibus aspernatur ducimus nostrum, doloribus optio beatae animi hic, deserunt nulla enim iure sed rerum doloremque quibusdam eveniet? Dolore et dolorem odit veniam cumque soluta tempore cupiditate alias distinctio debitis, assumenda, aut possimus labore sunt odio eos amet! Quis aspernatur, fugit corrupti odio assumenda corporis nesciunt iusto possimus!Lorem ipsum dolor sit amet consectetur.",
          button: "Закрыть",
        });
    }; 



    // hamburger menu 

    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu').toggleClass('hamburger-menu__effect');
        $('.hamburger-menu__content').toggleClass('hamburger-menu__content-show');
    });

    $('.hamburger-menu__content-menu ul li a').on('click', function () {
        $('.hamburger-menu').removeClass('hamburger-menu__effect');
        $('.hamburger-menu__content').removeClass('hamburger-menu__content-show');
    });
    


});
