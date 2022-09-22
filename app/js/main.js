$(function () {

    $('.products-button').on('click', function () {
        $('.products-button').addClass('active');
        $('.view-button').removeClass('active');
    });

    $('input[type="text"], select').styler();

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

    var mixer = mixitup('.newest__products-inner');

});