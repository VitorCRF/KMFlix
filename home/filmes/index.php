<?php 
            session_start();
            $logado = $_SESSION["logado"] ?? NULL;
            if (!$logado){
                header("Location: ../html/login.php"); 
            }
?>
<html>

    <head>
        <title>Kmflix | Filmes</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../../css/global.css">
        <link rel="stylesheet" type="text/css" href="../../css/home.css">
        <link rel="shortcut icon" href="../../public/logo.png">

        <script type="text/javascript" src="../../js/jquery-3.5.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <!--carousel links-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css">
        
        <script type="text/javascript" src="../../js/filmes.js"></script>
    </head>

    <body>

        <div class="div-header" id="divHomeHeader" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 70%, #121212), url('../../public/img/as_branquelas.jpg')">

            <div>
                <a href="../home/index.php"><img src="../../public/logo_escrito.png" alt="Kmflix" class="logo-escrito"></a>
            </div>

            <div class="div-opcoes-header">
                <a href="../index.php" class="a-opcoes-header"><p class="p-opcoes-header">Inicio</p></a>
                <a href="../series" class="a-opcoes-header"><p class="p-opcoes-header2">Séries</p></a>
                <a href="index.php" class="a-opcoes-header"><p class="p-opcoes-header2">Filmes</p></a>
            </div>

            <a href="../../html/minhaConta.php"><img src="../../public/icons/white_user_icon.png" alt="user icon" class="icon-header"></a>

            <div id="divSearch">
                <img src="../../public/icons/white_search_icon.png" alt="search icon" class="icon-header" onclick="searchInput()">
            </div>

            <div class="informacoes-titulo-header">
                <h1 class="nome-titulo-header" id="nomeTituloHeader">As Branquelas</h1>
                <h2 class="sinopse-titulo-header" id="sinopseTituloHeader">Dois irmaos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensao de drogas.</h2>
                <button class="botao-assistir-header" title="Assistir" id="botaoAssistirH6" onclick="chamarReproducao(this.id)">Assistir</button>
                <button class="botao-minha-lista-header" title="Minha lista" id="minhaListaH6" onclick="chamarAddMinhaLista(this.value)" value="6"><img src="../../public/icons/white_add_icon.png" id="imgMinhaListaHeader" width="40%" height="40%" alt="add icon"></button>
            </div>

        </div>

        <!--<div class="div-active-wallpaper"> 
        
            <img class="imagem-active-wallpaper" src="../public/img/vikings.jpg" alt="wallpaper" style="height: 30rem; width:100%; margin-bottom: 2rem;">
            
        </div>-->

        <!-- Modal -->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" id="modalHeader" name="modalHeader">
                
                      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <img src="../../public/icons/white_close_icon.png" width="80%" height="80%" title="Fechar" alt="close icon"> 
                      </button>

                      <button class="botao-assistir" title="Assistir" id="modalAssistir1" onclick="chamarReproducao(this.id)">Assistir</button>
                      <button class="botao-redondo" title="Minha Lista" id="modalMinhaLista1" onclick="chamarAddMinhaLista(this.value)" value="1"><img src="../../public/icons/white_add_icon.png" id="imgMinhaListaModal" width="40%" height="40%" alt="add icon"></button>

                    </div>
                    <div class="modal-body">

                        <div class="div-modal-infos">
                            <p class="p-modal-informacao1" id="anoModal"></p>
                            <img src="../../public/icons/classificacao-18-anos.png" class="imagem-classificacao" alt="18 anos" id="idadeModal">
                            <p class="p-modal-informacao1" id="duracaoModal"></p>
                        </div>

                        <div class="div-sinopse">
                            <h1 class="h1-sinopse" id="sinopseModal"></h1>
                        </div>

                        <div class="div-right">

                            <div class="div-elenco">
                                <h2 class="h2-titulo-infos">Elenco:</h2> <h3 class="h3-info-infos" id="elencoModal"></h3> 
                                <h2 class="h2-titulo-infos">Gêneros:</h2> <h3 class="h3-info-infos" id="generosModal"></h3>
                            </div>

                        </div>
                        
                    </div>
                    <div class="modal-footer"> 
                    </div>
                </div>
            </div>
        </div>

        
                  
        <div class="div-container-slick">

            <h1 class="titulo-carousel">Filmes</h1>
            <div class="carousel" id="carouselFilmes">

            </div>

            <h1 class="titulo-carousel">Minha lista de filmes</h1>
            <div class="carousel" id="carouselMinhaListaFilmes">

            </dv>

        </div>
    
    </body>

</html>