
$(document).ready(function() {

  var plano;

 $(".botao-prosseguir").click(function() {

    var radioSelection = $('input[name=plano]:checked').val();

    if (radioSelection === "19,90") {
      window.location="../html/pagamento.html";
      plano = "19,90"
    }
    else if (radioSelection === "29,90") {
      window.location="../html/pagamento.html";
      plano = "29,90"
    }
    else if (radioSelection === "49,90") {
      window.location="../html/pagamento.html";
      plano = "49,90"

      $.ajax({
        type: "POST",
        url: "../php/salvaCartão.php",
        data: {plano: plano}
      })

    }

 })

});