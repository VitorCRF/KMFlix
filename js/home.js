
var arrayTitulos = [
    ['1','Breaking Bad','2013','5 Temporadas','../public/img/breaking bad.jpeg','18','Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.','Suspense','Drama','Séries dramáticas sobre crimes','Suspense para TV','Bryan Cranston','Aron Paul','Anna Gunn','serie'],
    ['2','Vikings','2019','6 Temporadas','../public/img/vikings.jpg','16','Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.','Violentos','Épico','Empolgantes','Obras de época','Travis Fimmel','Kathryn Winnick','Clive Standem','serie'],
    ['3','Lost','2010','6 Temporadas','../public/img/lost.jpg','14','Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver. Liderados pelo médico Jack Shephard e pelo misterioso John Locke, eles irão descobrir que o local esconde perigosos segredos.','Ação','Aventura','drama','Ficção científica','Evangeline Lilly','Matthew Fox','Josh Halloway','serie'],
    ['4','Interstellar','2014','02:49','../public/img/interestellar.jpg','10','As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie.','Ficção científica','Aventura','Épico','Mistério','Matthew McConaughey','Anne Hathaway','Jessica Chastai','filme'],
    ['5','Gente Grande','2010','01:42','../public/img/gente_grande.jpg','12','A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.','Comédia','Besteirol','Adam Sandler','Kevin James','Chris Rock','filme']
];
var minhaLista = [
    
]
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

    ajaxRecuperarTitulos();

    $(".slick-slide").hover(function() {

        var getId = this.id;
        console.log(getId)

        if (getId === "slick-slide00") {
            if (infoSlideIsActiveBreakingBad === false) {

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[0][0]+'" onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">' + arrayTitulos[0][1] +'</h1>';
                content += '<p class="p-ano-lancamento" id="ano">' + arrayTitulos[0][2] + '</p>';
                content += '<p class="p-genero1" id="genero1">' + arrayTitulos[0][7] +'</p>';
                content += '<p class="p-genero1" id="genero2">' + arrayTitulos[0][8] + '</p>';
    
                $("#divInfosBreakingBad").append(content);
                $("#divInfosBreakingBad").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveBreakingBad = true;

                $(".botao-assistir-header").attr("id", "botaoAssistirH"+arrayTitulos[0][0]);
                
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[0][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[0][1])
                $("#sinopseTituloHeader").text(arrayTitulos[0][6])
            }
            else {
                $("#playButton"+arrayTitulos[0][0]).remove();
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
            
                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[1][0]+'"onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">' + arrayTitulos[1][1] +'</h1>';
                content += '<p class="p-ano-lancamento" id="ano">' + arrayTitulos[1][2] + '</p>';
                content += '<p class="p-genero1" id="genero1">' + arrayTitulos[1][7] +'</p>';
                content += '<p class="p-genero1" id="genero2">' + arrayTitulos[1][8] + '</p>';
    
                $("#divInfosVikings").append(content);
                $("#divInfosVikings").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveVikings = true;

                $(".botao-assistir-header").attr("id", "botaoAssistirH"+arrayTitulos[1][0]);
    
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[1][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[1][1])
                $("#sinopseTituloHeader").text(arrayTitulos[1][6])
            }
            else {
                $("#playButton"+arrayTitulos[1][0]).remove();
                $("#titulo").remove();
                $("#ano").remove();
                $("#genero1").remove();
                $("#genero2").remove();
                $("#divInfosVikings").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                infoSlideIsActiveVikings = false;
            }
        }

        else if (getId === "slick-slide02"){
            if (infoSlideIsActiveLost === false) {

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[2][0]+'" onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">' + arrayTitulos[2][1] +'</h1>';
                content += '<p class="p-ano-lancamento" id="ano">' + arrayTitulos[2][2] + '</p>';
                content += '<p class="p-genero1" id="genero1">' + arrayTitulos[2][7] +'</p>';
                content += '<p class="p-genero1" id="genero2">' + arrayTitulos[2][8] + '</p>';
    
                $("#divInfosLost").append(content);
                $("#divInfosLost").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveLost = true;

                $(".botao-assistir-header").attr("id", "botaoAssistirH"+arrayTitulos[2][0]);
    
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[2][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[2][1])
                $("#sinopseTituloHeader").text(arrayTitulos[2][6])
            }
            else {
                $("#playButton"+arrayTitulos[2][0]).remove();
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

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[3][0]+'" onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">'+ arrayTitulos[3][1] +'</h1>';
                content += '<p class="p-ano-lancamento" id="ano">' + arrayTitulos[3][2] +'</p>';
                content += '<p class="p-genero1" id="genero1">' + arrayTitulos[3][7] +'</p>';
                
    
                $("#divInfosInterestellar").append(content);
                $("#divInfosInterestellar").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveInterestellar = true;

                $(".botao-assistir-header").attr("id", "botaoAssistirH"+arrayTitulos[3][0]);
    
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[3][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[3][1])
                $("#sinopseTituloHeader").text(arrayTitulos[3][6])
            }
            else {
                $("#playButton"+arrayTitulos[3][0]).remove();
                $("#titulo").remove();
                $("#ano").remove();
                $("#genero1").remove();
                $("#divInfosInterestellar").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                infoSlideIsActiveInterestellar = false;
            }
        }

        else if (getId === "slick-slide04") {
            if (infoSlideIsActiveGenteGrande === false) {

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[4][0]+'" onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">' + arrayTitulos[4][1] + '</h1>';
                content += '<p class="p-ano-lancamento" id="ano">' + arrayTitulos[4][2] + '</p>';
                content += '<p class="p-genero1" id="genero1">' + arrayTitulos[4][7] + '</p>';
                content += '<p class="p-genero1" id="genero2">' + arrayTitulos[4][8] + '</p>';
                
    
                $("#divInfosGenteGrande").append(content);
                $("#divInfosGenteGrande").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveGenteGrande = true;
    
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[4][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[4][1])
                $("#sinopseTituloHeader").text(arrayTitulos[4][6])
            }
            else {
                $("#playButton"+arrayTitulos[4][0]).remove();
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

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[5][0]+'" onclick="chamarReproducao(this.id)">';
                content += '<h1 class="h1-titulo" id="titulo">As Branquelas</h1>';
                content += '<p class="p-ano-lancamento" id="ano">2004</p>';
                content += '<p class="p-genero1" id="genero1">Comédia</p>';
                content += '<p class="p-genero1" id="genero2">Besteirol</p>';
                
    
                $("#divInfosAsBranquelas").append(content);
                $("#divInfosAsBranquelas").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                content = "";
                infoSlideIsActiveAsBranquelas = true;
    
                document.getElementById("divHomeHeader").removeAttribute("style");
                $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + arrayTitulos[5][4] + ")");
                $("#divHomeHeader").css("background-size", "100%");
    
                $("#nomeTituloHeader").text(arrayTitulos[5][1])
                $("#sinopseTituloHeader").text(arrayTitulos[5][6])
            }
            else {
                $("#playButton"+arrayTitulos[5][0]).remove();
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

                content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+arrayTitulos[6][0]+'" onclick="chamarReproducao(this.id)">';
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
                $("#playButton"+arrayTitulos[6][0]).remove();
                $("#titulo").remove();
                $("#ano").remove();
                $("#genero1").remove();
                $("#genero2").remove();
                $("#divInfosDark").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                infoSlideIsActiveDark = false;
            }
        }

    })

    $("#slick-slide00").click(function() {

        $("#anoModal").text(arrayTitulos[0][2]);
        $("#duracaoModal").text(arrayTitulos[0][3]);
        $("#sinopseModal").text(arrayTitulos[0][6]);
        $(".botao-assistir").attr("id", "botaoAssistir"+arrayTitulos[0][0])

        document.getElementById("modalHeader").removeAttribute("style");
        $('#modalHeader').css("background-image", "url(" + arrayTitulos[0][4] + ")"); 
        $("#elencoModal").text(arrayTitulos[0][11]+", "+arrayTitulos[0][12]+", "+arrayTitulos[0][13]+", mais...");
        $("#generosModal").text(arrayTitulos[0][9]+", "+arrayTitulos[0][10]);
        
    });

    $("#slick-slide01").click(function() {

        $("#anoModal").text(arrayTitulos[1][2]);
        $("#duracaoModal").text(arrayTitulos[1][3]);
        $("#sinopseModal").text(arrayTitulos[1][6]);
        $("#elencoModal").text(arrayTitulos[1][11]+", "+arrayTitulos[1][12]+", "+arrayTitulos[1][13]+", mais...");
        $("#generosModal").text(arrayTitulos[1][9]+", "+arrayTitulos[1][10]);
        $(".botao-assistir").attr("id", "botaoAssistir"+arrayTitulos[1][0])

        document.getElementById("modalHeader").removeAttribute("style");
        $('#modalHeader').css("background-image", "url(" + arrayTitulos[1][4] + ")"); 

    })

})

function ajaxRecuperarTitulos() {

    $.ajax({
        type: "POST",
        url: "../php/home.php",
        dataType: "json",
        success: function(data) {
            try {
                data = JSON.parse(data);
            }catch(e) {}
            console.log(data);
        }
    })

}

function carouselSlick() {
    var carousel = $(".carousel");
    carousel.each(function() {
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

