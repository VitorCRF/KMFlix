
/*var retorno = [
    ['1','Breaking Bad','2013','5 Temporadas','../public/img/breaking bad.jpeg','18','Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.','Suspense','Drama','Séries dramáticas sobre crimes','Suspense para TV','Bryan Cranston','Aron Paul','Anna Gunn','serie'],
    ['2','Vikings','2019','6 Temporadas','../public/img/vikings.jpg','16','Esta série dramática acompanha a vida do viking Ragnar Lothbrok em sua jornada para ampliar o domínio nórdico e desafiar um líder incompetente e sem visão.','Violentos','Épico','Empolgantes','Obras de época','Travis Fimmel','Kathryn Winnick','Clive Standem','serie'],
    ['3','Lost','2010','6 Temporadas','../public/img/lost.jpg','14','Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver. Liderados pelo médico Jack Shephard e pelo misterioso John Locke, eles irão descobrir que o local esconde perigosos segredos.','Ação','Aventura','drama','Ficção científica','Evangeline Lilly','Matthew Fox','Josh Halloway','serie'],
    ['4','Interstellar','2014','02:49','../public/img/interestellar.jpg','10','As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie.','Ficção científica','Aventura','Épico','Mistério','Matthew McConaughey','Anne Hathaway','Jessica Chastai','filme'],
    ['5','Gente Grande','2010','01:42','../public/img/gente_grande.jpg','12','A morte do treinador de basquete da infância de velhos amigos os reúne no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.','Comédia','Besteirol','Adam Sandler','Kevin James','Chris Rock','filme']
];*/

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

    listaTitulos();

     function listaTitulos(){
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../php/listarTitulo.php',
            success: function(retorno){
                
                $("#imgBreakingBad").append('<img src="../'+retorno[0].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal"> ');
                $("#imgVikings").append('<img src="../'+retorno[1].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
                $("#imgLost").append('<img src="../'+retorno[2].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
                $("#imgInterestellar").append('<img src="../'+retorno[3].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
                $("#imgGenteGrande").append('<img src="../'+retorno[4].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
                $("#imgAsBranquelas").append('<img src="../'+retorno[5].wallpaper+'" alt="gente grande poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">');
    
                $(".slick-slide").hover(function() {
                    var getId = this.id;
                    console.log(getId)        
                    if (getId === "slick-slide00") {
                        if (infoSlideIsActiveBreakingBad === false) {       
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[0].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[0].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[0].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[0].genero2 +'</p>';
                
                            $("#divInfosBreakingBad").append(content);
                            $("#divInfosBreakingBad").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveBreakingBad = true;
                            
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[0][4] + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[0].titulo)
                            $("#sinopseTituloHeader").text(retorno[0].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[0].id).remove();
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
                        
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[1].id+'"onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[1].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[1].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[1].genero2 +'</p>';
                
                            $("#divInfosVikings").append(content);
                            $("#divInfosVikings").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveVikings = true;
                
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[1][4] + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[1].titulo)
                            $("#sinopseTituloHeader").text(retorno[1].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[1].id).remove();
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
            
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[2].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[2].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[2].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[2].genero2 +'</p>';
                
                            $("#divInfosLost").append(content);
                            $("#divInfosLost").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveLost = true;
                
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[2][4] + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[2].titulo)
                            $("#sinopseTituloHeader").text(retorno[2].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[2].id).remove();
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
            
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[3].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[3].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[3].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[3].genero2 +'</p>';
                            
                
                            $("#divInfosInterestellar").append(content);
                            $("#divInfosInterestellar").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveInterestellar = true;
                
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[3].id + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[3].titulo)
                            $("#sinopseTituloHeader").text(retorno[3].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[3].id).remove();
                            $("#titulo").remove();
                            $("#ano").remove();
                            $("#genero1").remove();
                            $("#divInfosInterestellar").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                            infoSlideIsActiveInterestellar = false;
                        }
                    }
            
                    else if (getId === "slick-slide04") {
                        if (infoSlideIsActiveGenteGrande === false) {
            
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[4].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[4].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[4].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[4].genero2 +'</p>';
                              
                            $("#divInfosGenteGrande").append(content);
                            $("#divInfosGenteGrande").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveGenteGrande = true;
                
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[4][4] + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[4].titulo)
                            $("#sinopseTituloHeader").text(retorno[4].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[4].id).remove();
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
                            
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[5].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[5].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[5].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[5].genero2 +'</p>';
                                    
                            $("#divInfosAsBranquelas").append(content);
                            $("#divInfosAsBranquelas").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveAsBranquelas = true;
                
                            document.getElementById("divHomeHeader").removeAttribute("style");
                            $('#divHomeHeader').css("background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url(" + retorno[5][4] + ")");
                            $("#divHomeHeader").css("background-size", "100%");
                
                            $("#nomeTituloHeader").text(retorno[5].titulo)
                            $("#sinopseTituloHeader").text(retorno[5].sinopse)
                        }
                        else {
                            $("#playButton"+retorno[5].id).remove();
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
                            content += '<img src="../public/icons/white_play_button.png" class="play-button" alt="play button" id="playButton'+retorno[6].id+'" onclick="chamarReproducao(this.id)">';
                            content += '<h1 class="h1-titulo" id="titulo">' + retorno[6].titulo +'</h1>';
                            content += '<p class="p-ano-lancamento" id="ano">' + retorno[6].ano_lancamento + '</p>';
                            content += '<p class="p-genero1" id="genero1">' + retorno[6].genero2 +'</p>';
                                      
                            $("#divInfosDark").append(content);
                            $("#divInfosDark").removeClass("div-infos-slide").addClass("div-infos-slide-ativa");
                            content = "";
                            infoSlideIsActiveDark = true;
                        }
                        else {
                            $("#playButton"+retorno[6].id).remove();
                            $("#titulo").remove();
                            $("#ano").remove();
                            $("#genero1").remove();
                            $("#genero2").remove();
                            $("#divInfosDark").removeClass("div-infos-slide-ativa").addClass("div-infos-slide");
                            infoSlideIsActiveDark = false;
                        }
                    }
                })
            
                $("#imgBreakingBad").click(function() {
            
                    $("#anoModal").text(retorno[0].ano_lancamento);
                    $("#duracaoModal").text(retorno[0].tempo_duracao);
                    $("#sinopseModal").text(retorno[0].sinopse);
                    $(".botao-assistir").attr("id", "botaoAssistir"+retorno[0].id)
            
                    document.getElementById("modalHeader").removeAttribute("style");
                    $('#modalHeader').css("background-image", "url(" + retorno[0][4] + ")"); 
                    $("#elencoModal").text(retorno[0].ator1+", "+retorno[0].ator2+", "+retorno[0].ator3+", mais...");
                    $("#generosModal").text(retorno[0].genero2);
                    
                });
                $("#slick-slide01").click(function() {
    
                    $("#anoModal").text(retorno[1].ano_lancamento);
                    $("#duracaoModal").text(retorno[1].tempo_duracao);
                    $("#sinopseModal").text(retorno[1].sinopse);
                    $("#elencoModal").text(retorno[1].ator1+", "+retorno[1].ator2+", "+retorno[1].ator3+", mais...");
                    $("#generosModal").text(retorno[1].genero2);
                    $(".botao-assistir").attr("id", "botaoAssistir"+retorno[1].id)
            
                    document.getElementById("modalHeader").removeAttribute("style");
                    $('#modalHeader').css("background-image", "url(" + retorno[1][4] + ")"); 
            
                })
            },
            error: function() {
                alert("erro");
            }
        });
    }
    carouselSlick();

    $('#Modal').on('shown.bs.modal', function () {
        $('#meuInput').trigger('focus')
      })

    var content = "";

    ajaxRecuperarTitulos();

    

    

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


function chamarReproducao(clickedId) {
    sessionStorage.setItem("playId", clickedId);
    window.location.href = "../home/play/index.html"
}

