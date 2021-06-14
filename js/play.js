var playId = sessionStorage.getItem("playId");
var content = "";


$(document).ready(function() {

    var dados;

    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '../../php/listarTitulo.php',
        success: function (retorno) {
            dados = retorno;
            ativarPlayer(dados);
            console.log(dados)
        },
        error: function () {
            alert("erro");
        }
    });

    

});

function ativarPlayer(dados) {

    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (var i = 0; i < playId.length; i++) {
        var c = playId.charAt(i);
        console.log('numeroid '+c)
        if (numbers.includes(c)) {
            var id = c;
            var length = Object.keys(dados).length;
            for (var j = 0; j < length; j++) {
                if (dados[j].id === id) {
                    console.log("iframe")
                    content = '<iframe width="1920" height="1080" src="'+dados[j].trailer+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                    $("#divContainer").append(content);
                }
                else {
                    continue;
                }
            }
            
        }
    }

}

