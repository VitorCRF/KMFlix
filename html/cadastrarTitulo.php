<?php
    session_start();
    $logado = $_SESSION["logado"] ?? NULL;
    $admin = $_SESSION["isAdmin"] ?? NULL;
    if(!$logado)
        header("Location: /stream/html/login.php"); 
    if($admin != 1)
        header("Location: ../home/index.php"); 
    if(isset($_GET['logout']) && $_GET['logout'] == 1){
        $_SESSION = array();
        session_destroy();
        header("Location: ../"); 
    }   
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Kmflix | Admin</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
        <script type="text/javascript" src="../js/cadastroTitulo.js"></script>
        <script type="text/javascript" src="../js/sjcl.js"></script>      
        <link rel="shortcut icon" href="../public/logo.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../css/global.css">
        <link rel="stylesheet" type="text/css" href="../css/cadastro.css">
        <style>
            label{
                padding-top: 25px;
            }
        </style>
    </head>

    <body>
        <header>
            <div class="div-header">
                <div>
                    <a href="../home/index.php"><img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito"></a>
                </div>         
                <a href="minhaConta.php"><img src="../public/icons/white_gear_icon.png" class="icon-header" alt="options icon"></a>
                <a href="../home/index.php"><img src="../public/icons/white_home_icon.png" class="icon-header" alt="home icon"></a>               
            </div>
        </header>
        <div class="div-container">   
            <div class="blocoCampos">
                <div class="row">
                    <div class="col-md-4">
                        <label for="nomeTitulo">Nome</label>
                        <input type="text" required placeholder="Nome do título" name="nomeTitulo" id="nomeTitulo" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label for="genero">Gêneros</label>
                        <input type="text" required placeholder="Informe os gêneros do título" name="generos" id="generos" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label for="genero">Atores</label>
                        <input type="text" required placeholder="Atores principais" name="atores" id="atores" class="form-control"> 
                    </div>
                        
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <label for="classificacao">Classificação indicativa</label>
                        <input type="text" required placeholder="Idade recomendada" name="classificacao" id="classificacao" class="form-control"> 
                    </div>
                    <div class="col-md-3">
                        <label for="anoLancamento">Ano de lançamento</label>
                        <input type="text" required placeholder="ex. 2010" name="anoLancamento" id="anoLancamento" class="form-control">
                    </div> 
                    <div class="col-md-3">
                        <label for="especie">Tipo do título</label>
                        <select type="text" required placeholder="Série ou filme" name="especie" id="especie" class="form-control"> 
                            <option value="serie">Série</option>
                            <option value="filme">Filme</option>
                        </select>
                    </div>   
                    
                    
                    <div class="col-md-3">
                        <label for="duracao">Duração ou temporadas</label>
                        <input type="text" required placeholder="Informe a duração" name="duracao" id="duracao" class="form-control"> 
                    </div>   

                </div>
                <div class="row">                   

                    <div class="col-md-6">
                        <label for="especie">Trailer</label>
                        <input type="text" required placeholder="Insira o link do trailer" name="trailer" id="trailer" class="form-control"> 
                    </div>
                    <div class="col-md-6">
                        <label for="wallpaper">Imagem do título</label>
                        <input type="file" required placeholder="Envie a imagem" name="wallpaper" id="wallpaper" class="form-control-file">
                    </div>
                    
                </div>
                <div class="row">       
                    <div class="col-md-6">
                        <label for="especie">Sinopse</label>
                        <textarea name="sinopse" required="required" id="sinopse" class="form-control"> </textarea>
                    </div>                           
                </div>
                <div class="text-center">
                    <button class="btn btn-primary" id="botaoProsseguir">Salvar</button>
                </div>                 
            </div>
        </div>  
    </body>

</html>