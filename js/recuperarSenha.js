
$(document).ready(function(){

    $(".botao-prosseguir").click(function() {
        comunicaPhp();
    })
    
});

function comunicaPhp() {
    
    $.ajax({
        type: "POST",
        url: "../php/recuperarSenha.php",
        data: { emailDestinatario: $("#campoEmail").val()},

        sucees: console.log("dados enviados para o php.")
    })

}