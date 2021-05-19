$(document).ready(function () {

    var dados;

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../../php/listarSeries.php',
        success: function (retorno) {
            litarSeries(retorno);
            dados = retorno;
        },
        error: function () {
            alert("erro");
        }
    })

    

    carouselSlick();

});

function litarSeries(retorno) {

    var content = "";
    content = '<div>';
    content += '<img src="../../' + retorno[0].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal"> '
    content += '</div>';

    $("#carouselSeries1").append(content);
    $("#carouselSeries1").slick("refresh");
    content = ""
}

function carouselSlick() {
    var carousel = $(".carousel");
    carousel.each(function () {
        $(this).slick({
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 5,
            slidesToScroll: 5,
            variableWidth: true,
            adaptiveHeight: true,

            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                    }
                },

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    }
                },

                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true,
                    }
                },

                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    }
                }

            ]
        })

    })

}