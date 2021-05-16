
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <title>Document</title>
</head>
<body>
    <span id="conteudo">

    </span>
    <script>
        $(document).ready(function(){
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: '../php/listarTitulo.php',
                success: function(retorno){
                    $("#conteudo").html('<img src="../'+retorno[1].wallpaper+'" width="100%" height="100%" alt="gente grande poster" class="imagem-carousel">')
                },
                error: function(retorno) {
                    alert("erro");
                }
            });

        });
    </script>
</body>
</html>