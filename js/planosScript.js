
$(document).ready(function() {

  var plano;
  var email;

 $("#botaoProsseguirPlanos").click(function() {

    var radioSelection = $('input[name=plano]:checked').val();

    if (radioSelection === "19,90") {
      plano = "19,90";
    }
    else if (radioSelection === "29,90") {
      plano = "29,90";
    }
    else if (radioSelection === "49,90") {
      plano = "49,90";
    }

    email = sessionStorage.getItem("emailCadastro");

    ajaxEnviaPlano();

});

function ajaxEnviaPlano() {
  $.ajax({
    type: "POST",
        url: "../php/salvaPlano.php",
        data: {               
            plano: plano,
            email: email
        },   
        success: ajaxSuccess()
  })
}

function ajaxSuccess() {
  console.log("ajax atualização de plano enviado")
  window.location.href = "../html/pagamento.php";
}

});