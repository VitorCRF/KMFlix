var nomeTitulo;
var generos;
var atores;
var classificacao;
var anoLancamento;
var especie;
var duracao;
var sinopse;
var trailer;
var fileImg;
var wallpaper;
var formData;
$(document).ready(function(){
    $("#wallpaper").change(function(){
        wallpaper = document.getElementById("wallpaper").files[0];
        formData = new FormData();
        formData.append("file", wallpaper)
    });
    $("#botaoProsseguir").click(function(){
 
        nomeTitulo = $("#nomeTitulo").val();
        generos = $("#generos").val();
        atores = $("#atores").val();
        classificacao = $("#classificacao").val();
        anoLancamento = $("#anoLancamento").val();
        especie = $("#especie").val();
        duracao = $("#duracao").val();
        trailer = $("#trailer").val();
        sinopse = $("#sinopse").val();   
        fileImg = $("#wallpaper").val();   
      
        $.ajax({
            url: "../php/upload.php",
            type: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function(retorno){
                var enderecoImg = "public/img/" + retorno;
                if(verificaInfos()){
                    enviarInfos(enderecoImg);
                }else{
                    alert("Todos os campos devem ser preenchidos!")
                }
                
            }

        })
    });
});
function enviarInfos(wallpaper) {
    $.ajax({
        type: "POST",
            url: "../php/cadastraTitulo.php",
            data: {                            
                nomeTitulo: nomeTitulo,
                generos: generos,
                atores: atores,
                classificacao: classificacao,
                anoLancamento: anoLancamento,
                especie: especie,
                duracao: duracao,
                sinopse: sinopse,
                trailer: trailer,
                wallpaper: wallpaper 
            },   
            success:function(data) {
                alert("Titulo cadastrado com sucesso!")
            },
            error: function(data){
                alert("Ocorreu um erro, tente novamente.")
            }
    }) 
}
function verificaInfos() {

    if (nomeTitulo != "") {
        $("#nomeTitulo").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#nomeTitulo").addClass("campo-cadastro-invalido"); 
        return false;
    }

    if (generos != "") {
        $("#generos").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#generos").addClass("campo-cadastro-invalido");
        return false;
    }

    if (atores != "") {
        $("#atores").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#atores").addClass("campo-cadastro-invalido");
        return false;
    }

    if (classificacao != "") {
        $("#classificacao").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#classificacao").addClass("campo-cadastro-invalido");
        return false;
    }

    if (anoLancamento != "") {
        $("#anoLancamento").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#anoLancamento").addClass("campo-cadastro-invalido");
        return false;
    }

    if (especie != "") {
        $("#especie").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#especie").addClass("campo-cadastro-invalido");
        return false;
    }
    
    if (duracao != "") {
        $("#duracao").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#duracao").addClass("campo-cadastro-invalido");
        return false;
    }

    if (sinopse != "") {
        $("#sinopse").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#sinopse").addClass("campo-cadastro-invalido");
        return false;
    }

    if (trailer != "") {
        $("#trailer").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#trailer").addClass("campo-cadastro-invalido");
        return false;
    }
    if (fileImg != "") {
        $("#wallpaper").removeClass("campo-cadastro-invalido");
        prosseguir = true;
    }else {
        prosseguir = false;
        $("#wallpaper").addClass("campo-cadastro-invalido");
        return false;
    }


    
   
    return true;

}