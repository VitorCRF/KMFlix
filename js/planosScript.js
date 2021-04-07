
$(document).ready(function() {

 $(".botao-prosseguir").click(function() {

    var radioSelection = $('input[name=plano]:checked').val();

    if (radioSelection === "19,90") {
      window.location="../html/pagamento.html";
    }
    else if (radioSelection === "29,90") {
      window.location="../html/pagamento.html";
    }
    else if (radioSelection === "49,90") {
      window.location="../html/pagamento.html";
    }

 })

});