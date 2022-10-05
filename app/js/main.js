$(function () {

    $('.products-button').on('click', function () {
        $('.products-button').addClass('active');
        $('.view-button').removeClass('active');
    });

    $('input[type="text"], select').styler({
        selectPlaceholder: 'Filter By',
    });

    $(".js-range-slider").ionRangeSlider({

        type: "double",
        grid: false,
        min: 0,
        max: 350,
        from: 30,
        to: 300,
        prefix: "$"
    });

    $('.single-price').on('click', function (){
        $(this).toggleClass('checked');
        $('.single-license__text').toggleClass('active-text');
        $('.single-item__price').toggleClass('active-price');
        $('.multi-license__text').removeClass('active-text');
        $('.multi-item__price').removeClass('active-price');
        $('.multi-price').removeClass('checked');
    });

    $('.multi-price').on('click', function (){
        $(this).toggleClass('checked');
        $('.multi-license__text').toggleClass('active-text');
        $('.multi-item__price').toggleClass('active-price');
        $('.single-license__text').removeClass('active-text');
        $('.single-item__price').removeClass('active-price');
        $('.single-price').removeClass('checked');
    });    

    $('.slider__wrapper').slick({

        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.followers-slider__wrapper').slick({

        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $(".rate-star").rateYo({

        rating: 5,
        starWidth: "13px",
        readOnly: true,
        halfStar: true,
        spacing: "5px",
        ratedFill: "#ffc000",
    });

    $(".category__rate-star").rateYo({

        rating: 5,
        starWidth: "13px",
        readOnly: true,
        halfStar: true,
        spacing: "4px",
        ratedFill: "#ffc000",
    });

    $('.single__product-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single__product-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single__product-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.grid-style').on('click', function(){
        $('.grid-style').addClass('grid-active');
        $('.list-style').removeClass('list-active');
        $('.category__grid').removeClass('list');
    });

    $('.list-style').on('click', function(){
        $('.list-style').addClass('list-active');
        $('.grid-style').removeClass('grid-active');
        $('.category__grid').addClass('list');
    });

    $('.title-popular').on('click', function () {
        $('.title-popular').addClass('active');
        $('.popular-content').addClass('active-content').fadeIn();
        $('.title-latest').removeClass('active');
        $('.latest-content').removeClass('active-content').hide();
    });

    $('.title-latest').on('click', function () {
        $('.title-latest').addClass('active');
        $('.latest-content').addClass('active-content').fadeIn();
        $('.title-popular').removeClass('active');
        $('.popular-content').removeClass('active-content').hide();
    });

    $('.blog-categories__link').on('click', function(event){        
        $('.blog__aside-item-content').find('.blog-categories__link').removeClass('active');    
        $(this).addClass('active');    
        return false;
    });

    var mixer = mixitup('.newest__products-inner');

});