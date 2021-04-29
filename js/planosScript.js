
$(document).ready(function() {

  var plano;

 $("#botaoProsseguirPlanos").click(function() {

    var radioSelection = $('input[name=plano]:checked').val();

    if (radioSelection === "19,90") {
      window.location="../html/pagamento.php";
      plano = "19,90";
    }
    else if (radioSelection === "29,90") {
      window.location="../html/pagamento.php";
      plano = "29,90";
    }
    else if (radioSelection === "49,90") {
      window.location="../html/pagamento.php";
      plano = "49,90";
    }

 });

});