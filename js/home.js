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

$(document).ready(function () {

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../php/listarTitulo.php',
        success: function (retorno) {
            dados = retorno;
            listarTitulos();
        },
        error: function () {
            alert("erro");
        }
    })

    ajaxBuscarMinhaLista();

    carouselSlick();

    $('#Modal').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
    })

    $(".slick-slide").hover(function () {
        var getId = this.id;
        var getValue = document.getElementById(getId).getAttribute("value");
        console.log("value: " + getValue)
        console.log(getId)

        hoverInfo(getValue);
        
    })

    var element = document.getElementsByClassName("slick-slide");

    element.addEventListener("touchstart", slickSliderClick(this.id), false)

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

function listarTitulos() {

    var length = Object.keys(dados).length;
    var content = "";

    for (var i = 0; i < length - 1; i++) {
        content += '<div value="'+dados[i].id+'" onclick="slickSliderClick(this.id)" title="'+dados[i].titulo+'" ontouchstart="slickSliderClick(this.id)">';
        content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
        content += '</div>';
    }

    $("#carouselRecomendacoes").append(content);
    $("#carouselRecomendacoes").slick("refresh");

    slickSliderHover();

}

function slickSliderHover() {
    $(".slick-slide").hover(function () {
        var getId = this.id;
        var getValue = document.getElementById(getId).getAttribute("value");
        console.log("value: " + getValue);
        console.log(getId);

        hoverInfo(getValue);

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

        //parte responsável por mudar o ícone da minha lista no header, para remover ou adicionar
        var length = Object.keys(dadosMinhaLista).length;
        var tituloOnMinhaLista = false;

        for (var i = 0; i < length - 1; i++) {
            
            if (dadosMinhaLista[i].titulos_id === dados[id-1].id) {
                tituloOnMinhaLista = true;
            }

        }

        if (tituloOnMinhaLista === true) {
            console.log(dados[id-1].titulo + " está na lista");
            $("#imgMinhaListaHeader").attr("src", "../public/icons/white_close_icon.png");
        }
        else {
            console.log(dados[id-1].titulo + " não está na lista");
            $("#imgMinhaListaHeader").attr("src", "../public/icons/white_add_icon.png");
        }

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
    $('#modalHeader').css("background-image", "url(../" + dados[id-1].wallpaper + ")");

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

function slickSliderTouch() {

    $(".slick-slide").on("tap",function() {
        slickSliderClick(this.id);
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


function chamarReproducao(clickedId) {
    sessionStorage.setItem("playId", clickedId);
    window.location.href = "../home/play/index.html"
}

function chamarAddMinhaLista(clickedId) {

    if (minhaLista === false) {
        var slickRemove = $("#divMinhaListaInicial").attr("data-slick-index")
        $("#divMinhaListaInicial").slick("slickRemove", slickRemove)
        $("#divMinhaListaInicial").slick("refresh");
        console.log("removendo minha lista")
        minhaLista = true;
    }

    addMinhaLista(clickedId)

}

function addMinhaLista(id) {

    ajaxEnviarMinhaLista(id);
    ajaxBuscarMinhaLista();

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
        },
        error: function () {
            //
        }
    })
}

function iniciarMinhaLista() {

    var length = Object.keys(dadosMinhaLista).length;
    var content;

    console.log("minha lista lenght: "+length)

    if (length > 0) {

        for (var i = 0; i < length-1; i++) {

            var tituloIdMinhaLista = dadosMinhaLista[i].titulos_id;
            tituloIdMinhaLista = tituloIdMinhaLista - 1;

            content += '<div value="'+dados[tituloIdMinhaLista].id+'" onclick="slickSliderClick(this.id)" title="'+dados[tituloIdMinhaLista].titulo+'" class="card-minha-lista">'
            content += '<img src="../' + dados[tituloIdMinhaLista].wallpaper + '" width="100%" height="100%" alt="'+dados[tituloIdMinhaLista].titulo+' wallpaper." class="imagem-carousel" id="imagemCarousel'+dados[tituloIdMinhaLista].titulo+'" data-toggle="modal" data-target="#Modal">';
            content += '</div>'

        }

        $('#carouselMinhaLista').slick('removeSlide', null, null, true);
        $("#carouselMinhaLista").append(content);
        $("#carouselMinhaLista").slick("refresh");
        content = "";

        slickSliderHover();

    }
    else {
        alert("Não foi possivel recuperar os titulos da lista de favoritos. Recarregue a página para tentar novamente.")
    }

}

function abrirFiltros() {

    console.log("filtro chamado")

    var content = "";

    content = '<div class="div-filtros">';
    //content = '<>';
    content = '</div>';

    $(".div-container-filtros").append(content);

    content = "";

}

function aplicarFiltros() {

    var filtroGenero = $("#selectionGenero").val();
    var filtroAno = $("#selectionAno").val();
    var filtroRelevancia = $("#selectionRelevancia").val();

    var filtroGeneroIsActive;
    var filtroAnoIsActive;
    var filtroRelevanciaIsActive;

    var content = "";
    var length = Object.keys(dados).length;

    if ($("#checkboxGenero").is(":checked")) {
        filtroGeneroIsActive = true;
    }
    else {
        filtroGeneroIsActive = false;
    }
    if ($("#checkboxAno").is(":checked")) {
        filtroAnoIsActive = true;
    }
    else {
        filtroAnoIsActive = false;
    }
    if ($("#checkboxRelevancia").is(":checked")) {
        filtroRelevanciaIsActive = true;
    }
    else {
        filtroRelevanciaIsActive = false;
    }

    if (filtroGeneroIsActive === false && filtroAnoIsActive === false && filtroRelevanciaIsActive === false) {
        resetarFiltros();
        slickSliderHover()
    }
    else if (filtroGeneroIsActive === true && filtroAnoIsActive === false && filtroRelevanciaIsActive === false){ //filtro apenas genero

        for (var i = 0; i < length - 1; i++) {

            if (dados[i].genero1 === filtroGenero || dados[i].genero2 === filtroGenero || dados[i].genero3 === filtroGenero || dados[i].genero4 === filtroGenero) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos com gênero "+filtroGenero);

        slickSliderHover()
        
    }

    else if (filtroAnoIsActive === true && filtroGeneroIsActive === false && filtroRelevanciaIsActive === false){ //filtro apenas ano

        for (var i = 0; i < length - 1; i++) {

            if (dados[i].ano_lancamento === filtroAno) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos lançados no ano "+filtroAno);

        slickSliderHover()

    }

    else if (filtroAnoIsActive === true && filtroGeneroIsActive === true && filtroRelevanciaIsActive === false) { //filtro ano e genero

        for (var i = 0; i < length - 1; i++) {

            var generos = [];
            generos.push(dados[i].genero1);
            generos.push(dados[i].genero2);
            generos.push(dados[i].genero3);
            generos.push(dados[i].genero4);

            if (dados[i].ano_lancamento === filtroAno && generos.includes(filtroGenero)) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos lançados no ano "+filtroAno+" e com gênero "+filtroGenero);

        slickSliderHover()
        generos = null;

    }

    else if (filtroRelevanciaIsActive === true && filtroAnoIsActive === false && filtroGeneroIsActive === false){ //filtro apenas relevancia

        for (var i = 0; i < length - 1; i++) {
            if (parseFloat(dados[i].relevancia) === parseFloat(filtroRelevancia)) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos com relevância "+filtroRelevancia);

        slickSliderHover()

    }

    else if (filtroRelevanciaIsActive === true && filtroAnoIsActive === true && filtroGeneroIsActive === false) { //filtro relevancia e ano

        for (var i = 0; i < length - 1; i++) {
            if (parseFloat(dados[i].relevancia) === parseFloat(filtroRelevancia) && dados[i].ano_lancamento === filtroAno) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos com relevância "+filtroRelevancia+" e lançados no ano "+filtroAno);

        slickSliderHover()

    }

    else if (filtroRelevanciaIsActive === true && filtroAnoIsActive === false && filtroGeneroIsActive === true) { //filtro relevancia e genero

        console.log("entrou filtro relevancia e genero")

        for (var i = 0; i < length - 1; i++) {

            var generos = [];
            generos.push(dados[i].genero1);
            generos.push(dados[i].genero2);
            generos.push(dados[i].genero3);
            generos.push(dados[i].genero4);

            if (parseFloat(dados[i].relevancia) === parseFloat(filtroRelevancia) && generos.includes(filtroGenero)) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos com gênero "+filtroGenero+" e relevância "+filtroRelevancia);

        slickSliderHover()
        generos = null;

    }

    else if (filtroRelevanciaIsActive === true && filtroAnoIsActive === true && filtroGeneroIsActive === true) { //filtro relevancia, ano e genero

        for (var i = 0; i < length - 1; i++) {

            var generos = [];
            generos.push(dados[i].genero1);
            generos.push(dados[i].genero2);
            generos.push(dados[i].genero3);
            generos.push(dados[i].genero4);

            if (parseFloat(dados[i].relevancia) === parseFloat(filtroRelevancia) && generos.includes(filtroGenero) && dados[i].ano_lancamento === filtroAno) {

                content += '<div value="'+dados[i].id+'">';
                content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
                content += '</div>';

            }

        }

        $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
        $("#carouselRecomendacoes").append(content);
        $("#carouselRecomendacoes").slick("refresh");
        $("#tituloRecomendacoes").text("Títulos lançados no ano "+filtroAno+" com gênero "+filtroGenero+" e relevância de "+filtroRelevancia);

        slickSliderHover()
        generos = null;

    }

}

function resetarFiltros() {

    var length = Object.keys(dados).length;
    var content = "";

    for (var i = 0; i < length - 1; i++) {

        content += '<div value="'+dados[i].id+'">';
        content += '<img src="../' + dados[i].wallpaper + '" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">';
        content += '</div>';

    }

    $('#carouselRecomendacoes').slick('removeSlide', null, null, true);
    $("#carouselRecomendacoes").append(content);
    $("#carouselRecomendacoes").slick("refresh");
    $("#tituloRecomendacoes").text("Recomendações");

}

