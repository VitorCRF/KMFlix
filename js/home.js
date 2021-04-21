
var arrayTitulos = [['Breaking Bad', ]]

$(document).ready(function() {

    $("#cardCarousel1").hover(
        function(){
            $this.css("background-color", "red")
        }
    )

    carouselSlick();

})

function carouselSlick() {
    $(".carousel").slick({
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
}



function reproduzir() {

}

function gerarCard() {

    var conteudo = "";

    conteudo += '<div class="div-card">';
    conteudo += '<div class="div-imagem-card">';
    conteudo += '';
    conteudo += '</div>';
    conteudo += '<div class="div-rodape-card">';
    conteudo += '<button onclick="reproduzir()" class="botão-play"><img src="../public/icons/white_play_button.png" alt="play" class="play-icon"></button>';
    conteudo += '<table>';
    conteudo += '<tr><td><h1 class="titulo-card">titulo 1</h1></td></tr>';
    conteudo += '<br>';
    conteudo += '<tr>';
    conteudo += '<td><p class="genero-card" id="genero1">genero 1</p></td>';
    conteudo += '<td><p class="genero-card2">genero 2</p></td>';
    conteudo += '</tr>';
    conteudo += '</table>';
    conteudo += '</div>';
    conteudo += '</div>';

}