<?php 
            session_start();
            $logado = $_SESSION["logado"] ?? NULL;
            if (!$logado){
                header("Location: ../html/login.php"); 
            }
            
?>
<html>    
    <head>
        <title>Kmflix</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../css/global.css">
        <link rel="stylesheet" type="text/css" href="../css/home.css">
        <link rel="shortcut icon" href="../public/logo.png">

        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <!--carousel links-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css">
        
        <script type="text/javascript" src="../js/home.js"></script>

    </head>

    <body>

        <div class="div-header" id="divHomeHeader">

            <div>
                <img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito">
            </div>

            <div class="div-opcoes-header">
                <a href="../home/index.html" class="a-opcoes-header"><p class="p-opcoes-header">Inicio</p></a>
                <a href="../home/series/" class="a-opcoes-header"><p class="p-opcoes-header2">Séries</p></a>
                <a href="../home/filmes/" class="a-opcoes-header"><p class="p-opcoes-header2">Filmes</p></a>
                <a href="../home/filmes/" class="a-opcoes-header"><p class="p-opcoes-header2">Favoritos</p></a>
            </div>

            <a href="../html/minhaConta.php"><img src="../public/icons/white_user_icon.png" alt="user icon" class="icon-header"></a>

            <div id="divSearch">
                <img src="../public/icons/white_search_icon.png" alt="search icon" class="icon-header" onclick="searchInput()">
            </div>

            <div class="informacoes-titulo-header">
                <h1 class="nome-titulo-header" id="nomeTituloHeader">Breaking Bad</h1>
                <h2 class="sinopse-titulo-header" id="sinopseTituloHeader">Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.</h2>
                <button class="botao-assistir-header" title="Assistir">Assistir</button>
                <button class="botao-minha-lista-header" title="Minha lista"><img src="../public/icons/white_add_icon.png" width="40%" height="40%" alt="add icon"></button>
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
                        <img src="../public/icons/white_close_icon.png" width="80%" height="80%" title="Fechar" alt="close icon"> 
                      </button>

                      <button class="botao-assistir" title="Assistir">Assistir</button>
                      <button class="botao-redondo" title="Minha Lista"><img src="../public/icons/white_add_icon.png" width="40%" height="40%" alt="add icon"></button>

                    </div>
                    <div class="modal-body">

                        <div class="div-modal-infos">
                            <p class="p-modal-informacao1" id="anoModal">2013</p>
                            <img src="../public/icons/classificacao-18-anos.png" class="imagem-classificacao" alt="18 anos" id="idadeModal">
                            <p class="p-modal-informacao1" id="duracaoModal">5 Temporadas</p>
                        </div>

                        <div class="div-sinopse">
                            <h1 class="h1-sinopse" id="sinopseModal">Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.</h1>
                        </div>

                        <div class="div-right">

                            <div class="div-elenco">
                                <h2 class="h2-titulo-infos">Elenco:</h2> <h3 class="h3-info-infos" id="elencoModal">Bryan Cranston, Aron Paul, Anna Gunn, mais...</h3> 
                                <h2 class="h2-titulo-infos">Gêneros:</h2> <h3 class="h3-info-infos" id="generosModal">Séries dramáticas sobre crimes, Suspense para TV, Séries dramáticas</h3>
                            </div>

                        </div>
                        
                    </div>
                    <div class="modal-footer"> 
                    </div>
                </div>
            </div>
        </div>

        
                  
        <div class="div-container">

        

            <div class="carousel">

                <div>
                    <img src="../public/img/breaking bad.jpeg" width="100%" height="100%" alt="breaking bad poster" class="imagem-carousel" id="imagemCarousel1" data-toggle="modal" data-target="#Modal">
                    <div class="div-infos-slide" id="divInfosBreakingBad">
                        <!--
                            <img src="../public/icons/white_play_button.png" class="play-button" alt="play button">
                            <h1 class="h1-titulo">Breaking Bad</h1>
                            <p class="p-ano-lancamento">2013</p>
                            <p class="p-genero1">Suspense</p>
                            <p class="p-genero1">Drama</p>
                        -->
                    </div>
                </div>
                <div>
                    <img src="../public/img/vikings.jpg" width="100%" height="100%" alt="vikings poster" class="imagem-carousel" data-toggle="modal" data-target="#Modal">
                    <div class="div-infos-slide" id="divInfosVikings"></div>
                </div>
                    <div><img src="../public/img/lost.jpg" width="100%" height="100%" alt="lost poster" class="imagem-carousel">
                    <div class="div-infos-slide" id="divInfosLost"></div>
                </div>
                <div>
                    <img src="../public/img/interestellar.jpg" width="100%" height="100%" alt="interestellar poster" class="imagem-carousel">
                    <div class="div-infos-slide" id="divInfosInterestellar"></div>
                </div>
                <div>
                    <img src="../public/img/gente_grande.jpg" width="100%" height="100%" alt="gente grande poster" class="imagem-carousel">
                    <div class="div-infos-slide" id="divInfosGenteGrande"></div>
                </div>
                <div>
                    <img src="../public/img/as_branquelas.jpg" width="100%" height="100%" alt="as branquelas poster" class="imagem-carousel">
                    <div class="div-infos-slide" id="divInfosAsBranquelas"></div>
                </div>
                <div>
                    <img src="../public/img/dark.png" width="100%" height="100%" alt="dark wallpaper" class="imagem-carousel">
                    <div class="div-infos-slide" id="divInfosDark"></div>
                </div>
                <div>
                    <h1>8</h1>
                    <div class="div-infos-slide"></div>
                </div>
                <div>
                    <h1>9</h1>
                    <div class="div-infos-slide"></div>
                </div>
                <div>
                    <h1>10</h1>
                    <div class="div-infos-slide"></div>
                </div>

            </div>

            <!--
                <div class="div-card">

                <div class="div-imagem-card">

                </div>

                <div class="div-rodape-card">

                    <button onclick="reproduzir()" class="botão-play"><img src="../public/icons/white_play_button.png" alt="play" class="play-icon"></button>
                    <table>

                        <tr><td><h1 class="titulo-card">titulo 1</h1></td></tr>
                        <br>
                        <tr>
                            <td><p class="genero-card" id="genero1">genero 1</p></td>
                            <td><p class="genero-card2">genero 2</p></td>
                        </tr>
                        
                    </table>

                </div>

            </div>
            -->

        </div>

    </body>

    