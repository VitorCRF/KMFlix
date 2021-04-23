$(document).ready(function() {

    $("#botaoProsseguir").click(function(){
        var sha256 = sjcl.hash.sha256.hash($("#senha").val());
        var sha256_hexa = sjcl.codec.hex.fromBits(sha256);
        $("#senhaHash").val(sha256_hexa);
        enviaDados("form-login");
        return false;
    });


    /*$.ajax({
        type: "POST",
        url: "../php/cadastroFinalizado.php",
        data: { emailDestinatario: email },

        sucees: emailSucess()
    })*/

});
function enviaDados(formulario){
    var dados = $("#"+formulario).serialize();
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/Login.php",
        data: dados,
        success: function(retorno){
            
                if(retorno.status == "s")
                {
                    alert(retorno.mensagem);
                    //window.location.href = "";
                }
                else
                {
                    alert(retorno.mensagem);
                }
            
        }
    })

}
function emailSucess() {

    console.log("Email de confirmação enviado.")

}