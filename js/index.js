$(document).ready(function() {

    comunicaServidor();

});
function comunicaServidor(){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "../php/valida_sessao.php",
        success: function(retorno){           
                if(retorno.status == "s")
                {                  
                    //window.location.href = "IndexLogado.html";
                }
                else
                {
                    alert(retorno.mensagem);
                }
            
        }
    })
}