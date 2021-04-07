$(document).ready(function() {

    fLocalEventosClick();

});

function fLocalEventosClick() {
    $("#teste").click(function() {
        fLocalComunicaServidor("inserir");
        return false;
    });

    function fLocalComunicaServidor(arquivo) {

        var valores = $("form").serialize();

        $.ajax({
            type: "POST",
            dataType: "json",
            data: valores,
            url: "../php/" + arquivo + ".php",

        });
    }
}