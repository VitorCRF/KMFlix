
var arrayTitulos = [['Breaking Bad', ]]
var searchInputIsActive = false;
var textInput = "";
var infoSlideIsActiveBreakingBad = false;
var infoSlideIsActiveVikings = false;
var infoSlideIsActiveLost = false;
var infoSlideIsActiveInterestellar = false;
var infoSlideIsActiveGenteGrande = false;
var infoSlideIsActiveAsBranquelas = false;
var infoSlideIsActiveDark = false;

$(document).ready(function() {

    carouselSlick();

    $('#Modal').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
      })

    var content = "";
    
    $("#slick-slide00").hover(function() {

        if (infoSlideIsActiveBreakingBad === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Breaking Bad</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2013</p>';
            content += '<p class="p-genero1" id="genero1">Suspense</p>';
            content += '<p class="p-genero1" id="genero2">Drama</p>';

            $("#divInfosBreakingBad").append(content);
            $("#divInfosBreakingBad").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveBreakingBad = true;
            console.log("breaking " + infoSlideIsActiveBreakingBad)
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosBreakingBad").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveBreakingBad = false;
            console.log("breaking " + infoSlideIsActiveBreakingBad)
        }

    })

    $("#slick-slide01").hover(function() {

        if (infoSlideIsActiveVikings === false) {
            
            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Vikings</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2019</p>';
            content += '<p class="p-genero1" id="genero1">Violentos</p>';
            content += '<p class="p-genero1" id="genero2">Épico</p>';

            $("#divInfosVikings").append(content);
            $("#divInfosVikings").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveVikings = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosVikings").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveVikings = false;
        }

    });

    $("#slick-slide02").hover(function(){

        if (infoSlideIsActiveLost === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Lost</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2010</p>';
            content += '<p class="p-genero1" id="genero1">Ação</p>';
            content += '<p class="p-genero1" id="genero2">Aventura</p>';

            $("#divInfosLost").append(content);
            $("#divInfosLost").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveLost = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosLost").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveLost = false;
        }

    }); 

    $("#slick-slide03").hover(function() {

        if (infoSlideIsActiveInterestellar === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Interestellar</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2014</p>';
            content += '<p class="p-genero1" id="genero1">Ficção científica</p>';
            

            $("#divInfosInterestellar").append(content);
            $("#divInfosInterestellar").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveInterestellar = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#divInfosInterestellar").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveInterestellar = false;
        }

    });

    $("#slick-slide04").hover(function() {

        if (infoSlideIsActiveGenteGrande === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Gente Grande</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2010</p>';
            content += '<p class="p-genero1" id="genero1">Comédia</p>';
            content += '<p class="p-genero1" id="genero2">Besteirol</p>';
            

            $("#divInfosGenteGrande").append(content);
            $("#divInfosGenteGrande").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveGenteGrande = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosGenteGrande").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveGenteGrande = false;
        }

    });

    $("#slick-slide05").hover(function() {

        if (infoSlideIsActiveAsBranquelas === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">As Branquelas</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2004</p>';
            content += '<p class="p-genero1" id="genero1">Comédia</p>';
            content += '<p class="p-genero1" id="genero2">Besteirol</p>';
            

            $("#divInfosAsBranquelas").append(content);
            $("#divInfosAsBranquelas").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveAsBranquelas = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosAsBranquelas").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveAsBranquelas = false;
        }

    });

    $("#slick-slide06").hover(function() {

        if (infoSlideIsActiveDark === false) {

            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton">';
            content += '<h1 class="h1-titulo" id="titulo">Dark</h1>';
            content += '<p class="p-ano-lancamento" id="ano">2017</p>';
            content += '<p class="p-genero1" id="genero1">Drama</p>';
            content += '<p class="p-genero1" id="genero2">Suspense</p>';
            

            $("#divInfosDark").append(content);
            $("#divInfosDark").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
            content = "";
            infoSlideIsActiveDark = true;
        }
        else {
            $("#playButton").remove();
            $("#titulo").remove();
            $("#ano").remove();
            $("#genero1").remove();
            $("#genero2").remove();
            $("#divInfosDark").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
            infoSlideIsActiveDark = false;
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