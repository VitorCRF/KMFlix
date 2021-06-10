
var infoSlideIsActive = false;
var dados;

$(document).ready(function () {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../../php/listarFilmes.php',
        success: function (retorno) {
            dados = retorno;
            litarFilmes(retorno);
            console.log(dados)
        },
        error: function () {
            alert("erro ao listar séries");
        }
    })

    carouselSlick();

});

function litarFilmes(retorno) {
    var length = Object.keys(retorno).length;
    var content = "";

    for (var i = 0; i < length - 1; i++) {

        if (dados[i].especie === "filme") {
            content += '<div value="' + retorno[i].id + '" onclick="slickSliderClick(this.id)">';
            content += '<img src="../../' + retorno[i].wallpaper + '" title="'+ retorno[i].titulo +'" alt="' + retorno[i].titulo + '" class="imagem-carousel" id="img'+retorno[i].id+'" value="'+retorno[i].id+'" data-toggle="modal" data-target="#Modal"> '
            content += '</div>';
        }

    }

    $("#carouselSeries1").append(content);
        $("#carouselSeries1").slick("refresh");
        content = ""

    slickSliderHover()

}

function chamarReproducao(clickedId) {
    sessionStorage.setItem("playId", clickedId);
    window.location.href = "../play/index.html"
}

function hoverInfo(id) {

    var content = "";
    var tituloId = "";

    if (infoSlideIsActive === false) {
        content += '<img src="../../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + dados[id - 1].id + '" onclick="chamarReproducao(this.id)">';
        content += '<h1 class="h1-titulo" id="titulo">' + dados[id - 1].titulo + '</h1>';
        content += '<p class="p-ano-lancamento" id="ano">' + dados[id - 1].ano_lancamento + '</p>';
        content += '<p class="p-genero1" id="genero1">' + dados[id - 1].genero2 + '</p>';

        tituloId = dados[id - 1].titulo;
        tituloId = tituloId.replace(/\s+/g, ''); //retira espaços em branco da string
        console.log("tituloId " + tituloId)

        $("#divInfos" + tituloId).append(content);
        $("#divInfos" + tituloId).attr("class", "div-infos-slide-ativa");
        content = "";
        infoSlideIsActive = true;

        $(".botao-assistir-header").attr("id", "botaoAssistirH" + dados[id - 1].id);
        $(".botao-minha-lista-header").attr("id", "minhaListaH");
        $(".botao-minha-lista-header").attr("value", dados[id - 1].id);

        document.getElementById("divHomeHeader").removeAttribute("style");
        $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../../" + dados[id - 1].wallpaper + ")");
        $("#divHomeHeader").css("background-size", "100%");

        $("#nomeTituloHeader").text(dados[id - 1].titulo)
        $("#sinopseTituloHeader").text(dados[id - 1].sinopse)
    }
    else {
        $("#divInfos" + tituloId).attr("class", "div-infos-slide");
        $("#playButton" + dados[id - 1].id).remove();
        $("#titulo").remove();
        $("#ano").remove();
        $("#genero1").remove();
        $("#genero2").remove();

        infoSlideIsActive = false;
    }

}

function slickSliderHover() {
    $(".slick-slide").hover(function () {
        var getId = this.id;
        var getValue = document.getElementById(getId).getAttribute("value");
        console.log("value: " + getValue);
        console.log(getId);

        hoverInfo(getValue);

    });
}

function slickSliderClick(clickeId) {

    var getValue = document.getElementById(clickeId).getAttribute("value");
    var id = getValue;

    $("#anoModal").text(dados[id-1].ano_lancamento);
    $("#duracaoModal").text(dados[id-1].tempo_duracao);
    $("#sinopseModal").text(dados[id-1].sinopse);
    $("#elencoModal").text(dados[id-1].ator1 + ", " + dados[id-1].ator2 + ", " + dados[id-1].ator3 + ", mais...");
    $("#generosModal").text(dados[id-1].genero1 + ", " + dados[id-1].genero2 + ", " + dados[id-1].genero3);
    $(".botao-assistir").attr("id", "modalAssistir" + dados[id-1].id);
    $(".botao-redondo").attr("id", "modalMinhaLista" + dados[id-1].id);
    $(".botao-redondo").attr("value", dados[id-1].id);

    document.getElementById("modalHeader").removeAttribute("style");
    $('#modalHeader').css("background-image", "url(../../" + dados[id-1].wallpaper + ")");

    //parte responsável por mudar o ícone da minha lista no modal, para remover ou adicionar
    var length = Object.keys(dadosMinhaLista).length;
    var tituloOnMinhaLista = false;

    for (var i = 0; i < length - 1; i++) {
        
        if (dadosMinhaLista[i].titulos_id === dados[id-1].id) {
            tituloOnMinhaLista = true;
        }

    }

    if (tituloOnMinhaLista === true) {
        console.log(dados[id-1].titulo + " está na lista");
        $("#imgMinhaListaModal").attr("src", "../public/icons/white_close_icon.png");
    }
    else {
        console.log(dados[id-1].titulo + " não está na lista");
        $("#imgMinhaListaModal").attr("src", "../public/icons/white_add_icon.png");
    }
    
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