
var arrayTitulos = [['Breaking Bad', ]]
var searchInputIsActive = false;
var textInput = "";
var infoSlideIsActive = false;
var hoverIsActive = false;

$(document).ready(function() {

    carouselSlick();

    $('#Modal').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
      })

    var content = "";

    $("#slick-slide00").hover(function() {
        
        if (infoSlideIsActive === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Breaking Bad</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2013</p>';
            content += '<p class="p-genero1" id="genero1">Suspense</p>';
            content += '<p class="p-genero1" id="genero2">Drama</p>'

            $(".div-infos-slide").append(content);
            $(".div-infos-slide").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActive = true;
            console.log(infoSlideIsActive)
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $(".div-infos-slide-ativa").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActive = false;
            console.log(infoSlideIsActive)
        }

    })

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

function searchInput() {

    if (searchInputIsActive === false) {
        var htmlTextInput = "<input type='text' class='search-input' placeholder='Series, filmes...' id='searchInput'>"
        $("#divSearch").append(htmlTextInput);
        searchInputIsActive = true;
    }
    else {
        textInput = $("#searchInput").val();
        if (textInput != "") {
            search();
        }
        else {
            $("#searchInput").remove();
        searchInputIsActive = false;
        }
    }
    
}

function search() {
    console.log("pesquisa por: " + textInput)
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