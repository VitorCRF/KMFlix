var infoSlideIsActive = false;
var dados;

$(document).ready(function () {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../../php/listarSeries.php',
        success: function (retorno) {
            dados = retorno;
            litarSeries(retorno);
        },
        error: function () {
            alert("erro ao listar séries");
        }
    })

    carouselSlick();

});

function litarSeries(retorno) {
    var length = Object.keys(retorno).length;
    var content = "";

    for (var i = 0; i < length - 1; i++) {

        content = '<div value="' + i + '">';
        content += '<img src="../../' + retorno[i].wallpaper + '" title="'+ retorno[i].titulo +'" alt="' + retorno[i].titulo + '" class="imagem-carousel" id="img'+retorno[i].id+'" value="'+i+'" data-toggle="modal" data-target="#Modal"> '
        content += '</div>';

        $("#carouselSeries1").append(content);
        $("#carouselSeries1").slick("refresh");
        content = ""

    }

    $(".slick-slide").hover(function () {
        var getId = this.id;
        var getValue = document.getElementById(getId).getAttribute("value");
        console.log("value: " + getValue);
        console.log(getId);

        hoverInfo(getValue);

    });

    $(".imagem-carousel").click(function () {
        var getId = this.id;
        var getValue = document.getElementById(getId).getAttribute("value");
        clickEvent(getValue);
    });

    
}

function chamarReproducao(clickedId) {
    sessionStorage.setItem("playId", clickedId);
    window.location.href = "../play/index.html"
}

function hoverInfo(id) {

    var content = "";
    var tituloId = "";

    if (infoSlideIsActive === false) {
        content += '<img src="../../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + dados[id].id + '" onclick="chamarReproducao(this.id)">';
        content += '<h1 class="h1-titulo" id="titulo">' + dados[id].titulo + '</h1>';
        content += '<p class="p-ano-lancamento" id="ano">' + dados[id].ano_lancamento + '</p>';
        content += '<p class="p-genero1" id="genero1">' + dados[id].genero2 + '</p>';

        tituloId = dados[id].titulo;
        tituloId = tituloId.replace(/\s+/g, ''); //retira espaços em branco da string
        console.log("tituloId " + tituloId)

        $("#divInfos" + tituloId).append(content);
        $("#divInfos" + tituloId).attr("class", "div-infos-slide-ativa");
        content = "";
        infoSlideIsActive = true;

        $(".botao-assistir-header").attr("id", "botaoAssistirH" + dados[id].id);
        $(".botao-minha-lista-header").attr("id", "minhaListaH");
        $(".botao-minha-lista-header").attr("value", dados[id].id);

        document.getElementById("divHomeHeader").removeAttribute("style");
        $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../../" + dados[id].wallpaper + ")");
        $("#divHomeHeader").css("background-size", "100%");

        $("#nomeTituloHeader").text(dados[id].titulo)
        $("#sinopseTituloHeader").text(dados[id].sinopse)
    }
    else {
        $("#divInfos" + tituloId).attr("class", "div-infos-slide");
        $("#playButton" + dados[id].id).remove();
        $("#titulo").remove();
        $("#ano").remove();
        $("#genero1").remove();
        $("#genero2").remove();

        infoSlideIsActive = false;
    }

}

function clickEvent(id) {

    var posicaoArray = id;

    $("#anoModal").text(dados[posicaoArray].ano_lancamento);
    $("#duracaoModal").text(dados[posicaoArray]);
    $("#sinopseModal").text(dados[posicaoArray].sinopse);
    $("#elencoModal").text(dados[posicaoArray].ator1 + ", " + dados[posicaoArray].ator2 + ", " + dados[posicaoArray].ator3 + ", mais...");
    $("#generosModal").text(dados[posicaoArray].genero2 + "," + dados[posicaoArray].genero3 + "," + dados[posicaoArray].genero4);
    $(".botao-assistir").attr("id", "modalAssistir" + dados[posicaoArray].id)
    $(".botao-redondo").attr("id", "modalMinhaLista" + dados[posicaoArray].id);
    $(".botao-redondo").attr("value", dados[posicaoArray].id);

    document.getElementById("modalHeader").removeAttribute("style");
    $('#modalHeader').css("background-image", "url(../../" + dados[posicaoArray].wallpaper + ")");

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