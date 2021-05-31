/*var retorno = [
    ['1','Breaking Bad','2013','5 Temporadas','../public/img/breaking bad.jpeg','18','Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.','Suspense','Drama','Séries dramáticas sobre crimes','Suspense para TV','Bryan Cranston','Aron Paul','Anna Gunn','serie'],
    ['2','Vikings','2019','6 Temporadas','../public/img/vikings.jpg','16','Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.','Violentos','Épico','Empolgantes','Obras de época','Travis Fimmel','Kathryn Winnick','Clive Standem','serie'],
    ['3','Lost','2010','6 Temporadas','../public/img/lost.jpg','14','Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver. Liderados pelo médico Jack Shephard e pelo misterioso John Locke, eles irão descobrir que o local esconde perigosos segredos.','Ação','Aventura','drama','Ficção científica','Evangeline Lilly','Matthew Fox','Josh Halloway','serie'],
    ['4','Interstellar','2014','02:49','../public/img/interestellar.jpg','10','As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie.','Ficção científica','Aventura','Épico','Mistério','Matthew McConaughey','Anne Hathaway','Jessica Chastai','filme'],
    ['5','Gente Grande','2010','01:42','../public/img/gente_grande.jpg','12','A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.','Comédia','Besteirol','Adam Sandler','Kevin James','Chris Rock','filme']
];*/

var dados;
var dadosMinhaLista;

var searchInputIsActive = false;
var textInput = "";
var minhaLista = false;
var infoSlideIsActive = false;
var infoSlideIsActiveBreakingBad = false;
var infoSlideIsActiveVikings = false;
var infoSlideIsActiveLost = false;
var infoSlideIsActiveInterestellar = false;
var infoSlideIsActiveGenteGrande = false;
var infoSlideIsActiveAsBranquelas = false;
var infoSlideIsActiveDark = false;

$(document).ready(function () {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../php/listarTitulo.php',
        success: function (retorno) {
            dados = retorno;
            listaTitulos(retorno);
        },
        error: function () {
            alert("erro");
        }
    })

    ajaxBuscarMinhaLista();

    function listaTitulos(retorno) {

        $("#imgBreakingBad").append('<img src="../' + retorno[0].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal"> ');
        $("#imgVikings").append('<img src="../' + retorno[1].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
        $("#imgLost").append('<img src="../' + retorno[2].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
        $("#imgInterestellar").append('<img src="../' + retorno[3].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
        $("#imgGenteGrande").append('<img src="../' + retorno[4].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
        $("#imgAsBranquelas").append('<img src="../' + retorno[5].wallpaper + '" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');

        $(".slick-slide").hover(function () {
            var getId = this.id;
            var getValue = document.getElementById(getId).getAttribute("value");
            console.log("value: " + getValue)
            console.log(getId)

            hoverInfo(getValue);
            /*if (getId === "slick-slide00") {
                if (infoSlideIsActiveBreakingBad === false) {
                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[0].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[0].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[0].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[0].genero2 + '</p>';

                    $("#divInfosBreakingBad").append(content);
                    $("#divInfosBreakingBad").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveBreakingBad = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH1");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH1");
                    $(".botao-minha-lista-header").attr("value", retorno[0].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[0].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[0].titulo)
                    $("#sinopseTituloHeader").text(retorno[0].sinopse)
                }
                else {
                    $("#playButton" + retorno[0].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosBreakingBad").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveBreakingBad = false;
                }
            }

            else if (getId === "slick-slide01") {
                if (infoSlideIsActiveVikings === false) {
                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[1].id + '"onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[1].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[1].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[1].genero2 + '</p>';

                    $("#divInfosVikings").append(content);
                    $("#divInfosVikings").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveVikings = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH2");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH2")
                    $(".botao-minha-lista-header").attr("value", retorno[1].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[1].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[1].titulo)
                    $("#sinopseTituloHeader").text(retorno[1].sinopse)
                }
                else {
                    $("#playButton" + retorno[1].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosVikings").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveVikings = false;
                }
            }

            else if (getId === "slick-slide02") {
                if (infoSlideIsActiveLost === false) {

                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[2].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[2].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[2].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[2].genero2 + '</p>';

                    $("#divInfosLost").append(content);
                    $("#divInfosLost").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveLost = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH3");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH3");
                    $(".botao-minha-lista-header").attr("value", retorno[2].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[2].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[2].titulo)
                    $("#sinopseTituloHeader").text(retorno[2].sinopse)
                }
                else {
                    $("#playButton" + retorno[2].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosLost").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveLost = false;
                }
            }

            else if (getId === "slick-slide03") {
                if (infoSlideIsActiveInterestellar === false) {

                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[3].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[3].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[3].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[3].genero2 + '</p>';


                    $("#divInfosInterestellar").append(content);
                    $("#divInfosInterestellar").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveInterestellar = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH4");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH4");
                    $(".botao-minha-lista-header").attr("value", retorno[3].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[3].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[3].titulo)
                    $("#sinopseTituloHeader").text(retorno[3].sinopse)
                }
                else {
                    $("#playButton" + retorno[3].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#divInfosInterestellar").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveInterestellar = false;
                }
            }

            else if (getId === "slick-slide04") {
                if (infoSlideIsActiveGenteGrande === false) {

                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[4].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[4].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[4].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[4].genero2 + '</p>';

                    $("#divInfosGenteGrande").append(content);
                    $("#divInfosGenteGrande").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveGenteGrande = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH5");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH5");
                    $(".botao-minha-lista-header").attr("value", retorno[4].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[4].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[4].titulo)
                    $("#sinopseTituloHeader").text(retorno[4].sinopse)
                }
                else {
                    $("#playButton" + retorno[4].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosGenteGrande").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveGenteGrande = false;
                }
            }

            else if (getId === "slick-slide05") {
                if (infoSlideIsActiveAsBranquelas === false) {

                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[5].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[5].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[5].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[5].genero2 + '</p>';

                    $("#divInfosAsBranquelas").append(content);
                    $("#divInfosAsBranquelas").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveAsBranquelas = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH6");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH6");
                    $(".botao-minha-lista-header").attr("value", retorno[5].id);

                    document.getElementById("divHomeHeader").removeAttribute("style");
                    $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + retorno[5].wallpaper + ")");
                    $("#divHomeHeader").css("background-size", "100%");

                    $("#nomeTituloHeader").text(retorno[5].titulo)
                    $("#sinopseTituloHeader").text(retorno[5].sinopse)
                }
                else {
                    $("#playButton" + retorno[5].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosAsBranquelas").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveAsBranquelas = false;
                }
            }

            else if (getId === "slick-slide06") {
                if (infoSlideIsActiveDark === false) {
                    content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + retorno[6].id + '" onclick="chamarReproducao(this.id)">';
                    content += '<h1 class="h1-titulo" id="titulo">' + retorno[6].titulo + '</h1>';
                    content += '<p class="p-ano-lancamento" id="ano">' + retorno[6].ano_lancamento + '</p>';
                    content += '<p class="p-genero1" id="genero1">' + retorno[6].genero2 + '</p>';

                    $("#divInfosDark").append(content);
                    $("#divInfosDark").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                    content = "";
                    infoSlideIsActiveDark = true;

                    $(".botao-assistir-header").attr("id", "botaoAssistirH7");
                    $(".botao-minha-lista-header").attr("id", "minhaListaH7");
                    $(".botao-minha-lista-header").attr("value", retorno[6].id);
                }
                else {
                    $("#playButton" + retorno[6].id).remove();
                    $("#titulo").remove();
                    $("#ano").remove();
                    $("#genero1").remove();
                    $("#genero2").remove();
                    $("#divInfosDark").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                    infoSlideIsActiveDark = false;
                }
            }*/
        })

        $("#slick-slide00").click(function () {

            $("#anoModal").text(retorno[0].ano_lancamento);
            $("#duracaoModal").text(retorno[0].tempo_duracao);
            $("#sinopseModal").text(retorno[0].sinopse);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[0].id)
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[0].id)
            $(".botao-redondo").attr("value", retorno[0].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[0].wallpaper + ")");
            $("#elencoModal").text(retorno[0].ator1 + ", " + retorno[0].ator2 + ", " + retorno[0].ator3 + ", mais...");
            $("#generosModal").text(retorno[0].genero2 + "," + retorno[0].genero3 + "," + retorno[0].genero4);

        });
        $("#slick-slide01").click(function () {

            $("#anoModal").text(retorno[1].ano_lancamento);
            $("#duracaoModal").text(retorno[1].tempo_duracao);
            $("#sinopseModal").text(retorno[1].sinopse);
            $("#elencoModal").text(retorno[1].ator1 + ", " + retorno[1].ator2 + ", " + retorno[1].ator3 + ", mais...");
            $("#generosModal").text(retorno[1].genero2 + "," + retorno[1].genero3 + "," + retorno[1].genero4);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[1].id)
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[1].id)
            $(".botao-redondo").attr("value", retorno[1].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[1].wallpaper + ")");

        });
        $("#slick-slide02").click(function () {

            $("#anoModal").text(retorno[2].ano_lancamento);
            $("#duracaoModal").text(retorno[2].tempo_duracao);
            $("#sinopseModal").text(retorno[2].sinopse);
            $("#elencoModal").text(retorno[2].ator1 + ", " + retorno[2].ator2 + ", " + retorno[2].ator3 + ", mais...");
            $("#generosModal").text(retorno[2].genero2 + "," + retorno[2].genero3 + "," + retorno[2].genero4);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[2].id);
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[2].id);
            $(".botao-redondo").attr("value", retorno[2].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[2].wallpaper + ")");

        });
        $("#slick-slide03").click(function () {

            $("#anoModal").text(retorno[3].ano_lancamento);
            $("#duracaoModal").text(retorno[3].tempo_duracao);
            $("#sinopseModal").text(retorno[3].sinopse);
            $("#elencoModal").text(retorno[3].ator1 + ", " + retorno[3].ator2 + ", " + retorno[3].ator3 + ", mais...");
            $("#generosModal").text(retorno[3].genero2 + "," + retorno[3].genero3 + "," + retorno[3].genero4);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[3].id);
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[3].id);
            $(".botao-redondo").attr("value", retorno[3].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[3].wallpaper + ")");

        });
        $("#slick-slide04").click(function () {

            $("#anoModal").text(retorno[4].ano_lancamento);
            $("#duracaoModal").text(retorno[4].tempo_duracao);
            $("#sinopseModal").text(retorno[4].sinopse);
            $("#elencoModal").text(retorno[4].ator1 + ", " + retorno[4].ator2 + ", " + retorno[4].ator3 + ", mais...");
            $("#generosModal").text(retorno[4].genero1 + ", " + retorno[4].genero2);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[4].id)
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[4].id);
            $(".botao-redondo").attr("value", retorno[4].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[4].wallpaper + ")");

        });
        $("#slick-slide05").click(function () {

            $("#anoModal").text(retorno[5].ano_lancamento);
            $("#duracaoModal").text(retorno[5].tempo_duracao);
            $("#sinopseModal").text(retorno[5].sinopse);
            $("#elencoModal").text(retorno[5].ator1 + ", " + retorno[5].ator2 + ", " + retorno[5].ator3 + ", mais...");
            $("#generosModal").text(retorno[5].genero2 + "," + retorno[5].genero3 + "," + retorno[5].genero4);
            $(".botao-assistir").attr("id", "modalAssistir" + retorno[5].id)
            $(".botao-redondo").attr("id", "modalMinhaLista" + retorno[5].id);
            $(".botao-redondo").attr("value", retorno[5].id);

            document.getElementById("modalHeader").removeAttribute("style");
            $('#modalHeader').css("background-image", "url(../" + retorno[5].wallpaper + ")");

        });
    }

    carouselSlick();

    $('#Modal').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
    })

    var content = "";

})

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

function hoverInfo(id) {

    var content = "";
    var tituloId = "";

    if (infoSlideIsActive === false) {
        content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + dados[id-1].id + '" onclick="chamarReproducao(this.id)">';
        content += '<h1 class="h1-titulo" id="titulo">' + dados[id-1].titulo + '</h1>';
        content += '<p class="p-ano-lancamento" id="ano">' + dados[id-1].ano_lancamento + '</p>';
        content += '<p class="p-genero1" id="genero1">' + dados[id-1].genero2 + '</p>';

        tituloId = dados[id-1].titulo;
        tituloId = tituloId.replace(/\s+/g, ''); //retira espaços em branco da string
        console.log("tituloId "+tituloId)

        //$("#divInfos"+tituloId).append(content);
        //$("#divInfos"+tituloId).attr("class", "div-infos-slide-ativa");
        content = "";
        infoSlideIsActive = true;

        $(".botao-assistir-header").attr("id", "botaoAssistirH"+dados[id-1].id);
        $(".botao-minha-lista-header").attr("id", "minhaListaH");
        $(".botao-minha-lista-header").attr("value", dados[id-1].id);

        document.getElementById("divHomeHeader").removeAttribute("style");
        $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(../" + dados[id-1].wallpaper + ")");
        $("#divHomeHeader").css("background-size", "100%");

        $("#nomeTituloHeader").text(dados[id-1].titulo)
        $("#sinopseTituloHeader").text(dados[id-1].sinopse)
    }
    else {
        $("#divInfos"+tituloId).attr("class", "div-infos-slide");
        /*$("#playButton" + dados[id-1].id).remove();
        $("#titulo").remove();
        $("#ano").remove();
        $("#genero1").remove();
        $("#genero2").remove();*/
        
        infoSlideIsActive = false;
    }

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


function chamarReproducao(clickedId) {
    sessionStorage.setItem("playId", clickedId);
    window.location.href = "../home/play/index.html"
}

function chamarAddMinhaLista(clickedId) {

    if (minhaLista === false) {
        var slickRemove = $("#divMinhaListaInicial").attr("data-slick-index")
        $("#divMinhaListaInicial").slick("slickRemove", slickRemove)
        $("#divMinhaListaInicial").slick("refresh")
        console.log("removendo minha lista")
        minhaLista = true;
    }

    addMinhaLista(clickedId)

}

function addMinhaLista(id) {

    console.log("chamada add minha lista " + id)

    var content

    content = '<div>'
    content += '<img src="../' + dados[id - 1].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
    //content += '<div class="div-infos-slide" id="divInfos' + dados[id - 1].titulo + '">'
    //content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + dados[id - 1].id + '" onclick="chamarReproducao(this.id)">';
    //content += '<h1 class="h1-titulo" id="titulo">' + dados[id - 1].titulo + '</h1>';
    //content += '<p class="p-ano-lancamento" id="ano">' + dados[id - 1].ano_lancamento + '</p>';
    //content += '<p class="p-genero1" id="genero1">' + dados[id - 1].genero2 + '</p>';
    //content += '</div>'
    content += '</div>'

    $("#carouselMinhaLista").append(content);
    $("#carouselMinhaLista").slick("refresh");
    content = "";

    ajaxEnviarMinhaLista(id);

}

function ajaxEnviarMinhaLista(titulo_id) {
    $.ajax({
        type: 'POST',
        url: '../php/enviarMinhaLista.php',
        data: {
            titulo_id: titulo_id
        },
        success: console.log("ajax minha lista enviado"),
        error: function () {
            alert("Erro ao enviar os titulos da lista de favoritos.");
        }
    })
}

function ajaxBuscarMinhaLista() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../php/buscarMinhaLista.php',
        success: function (retornoMinhaLista) {
            dadosMinhaLista = retornoMinhaLista;
            iniciarMinhaLista();
            console.log(dadosMinhaLista);
        },
        error: function () {
            alert("erro");
        }
    })
}

function iniciarMinhaLista() {

    var length = Object.keys(dadosMinhaLista).length;

    console.log("minha lista lenght: "+length)

    if (length > 0) {
        
        for (var i = 0; i < length-1; i++) {

            var tituloIdMinhaLista = dadosMinhaLista[i].titulos_id;
            tituloIdMinhaLista = tituloIdMinhaLista - 1;

            var content;

            content = '<div>'
            content += '<img src="../' + dados[tituloIdMinhaLista].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
            //content += '<div class="div-infos-slide" id="divInfos' + dados[tituloIdMinhaLista].titulo + '">'
            //content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton' + dados[tituloIdMinhaLista].id + '" onclick="chamarReproducao(this.id)">';
            //content += '<h1 class="h1-titulo" id="titulo">' + dados[tituloIdMinhaLista].titulo + '</h1>';
            //content += '<p class="p-ano-lancamento" id="ano">' + dados[tituloIdMinhaLista].ano_lancamento + '</p>';
            //content += '<p class="p-genero1" id="genero1">' + dados[tituloIdMinhaLista].genero2 + '</p>';
            //content += '</div>'
            content += '</div>'

            $("#carouselMinhaLista").append(content);
            $("#carouselMinhaLista").slick("refresh");
            content = "";

        }

    }
    else {
        alert("Não foi possivel recuperar os titulos da lista de favoritos. Recarregue a página para tentar novamente.")
    }

}

