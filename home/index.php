<!DOCTYPE html>

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
                <a href="../home/index.php"><img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito"></a>
            </div>

            <div class="div-opcoes-header">
                <a href="/home" class="a-opcoes-header"><p class="p-opcoes-header">Inicio</p></a>
                <a href="../home/series" class="a-opcoes-header"><p class="p-opcoes-header2">Séries</p></a>
                <a href="../home/filmes/" class="a-opcoes-header"><p class="p-opcoes-header2">Filmes</p></a>
            </div>

            <a href="../html/minhaConta.php"><img src="../public/icons/white_user_icon.png" alt="user icon" class="icon-header"></a>

            <div id="divSearch">
                <img src="../public/icons/white_search_icon.png" alt="search icon" class="icon-header" onclick="searchInput()">
            </div>

            <div class="informacoes-titulo-header">
                <h1 class="nome-titulo-header" id="nomeTituloHeader">Breaking Bad</h1>
                <h2 class="sinopse-titulo-header" id="sinopseTituloHeader">Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.</h2>
                <button class="botao-assistir-header" title="Assistir" id="botaoAssistirH1" onclick="chamarReproducao(this.id)">Assistir</button>
                <button class="botao-minha-lista-header" title="Minha lista" id="minhaListaH1" onclick="chamarAddMinhaLista(this.value)" value="1"><img src="../public/icons/white_add_icon.png" width="40%" height="40%" alt="add icon" id="imgMinhaListaHeader" style="margin-bottom: 0.2rem;"></button>
            </div>

        </div>

        <!-- Modal dos titulos-->
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header" id="modalHeader" name="modalHeader">
                
                      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <img src="../public/icons/white_close_icon.png" width="80%" height="80%" title="Fechar" alt="close icon"> 
                      </button>

                      <button class="botao-assistir" title="Assistir" id="modalAssistir1" onclick="chamarReproducao(this.id)">Assistir</button>
                      <button class="botao-redondo" title="Minha Lista" id="modalMinhaLista1" onclick="chamarAddMinhaLista(this.value)" value="1"><img src="../public/icons/white_add_icon.png" width="40%" height="40%" alt="add icon" id="imgMinhaListaModal" style="margin-bottom: 0.2rem;"></button>

                    </div>
                    <div class="modal-body">

                        <div class="div-modal-infos">
                            <p class="p-modal-informacao1" id="anoModal"></p>
                            <img src="../public/icons/classificacao-18-anos.png" title="Classificação indicativa" class="imagem-classificacao" alt="Classificação indicativa" id="idadeModal">
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

        <!-- Modal filtros -->
        <!-- Modal -->
        <div class="modal fade" id="modalFiltros" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content" id="modal-content-filtros">
            <div class="modal-header" id="modal-header-filtros">
                <button type="button" id="close-filtros" data-dismiss="modal" aria-label="Fechar">
                    <img src="../public/icons/white_close_icon.png" width="80%" height="80%" title="Fechar" alt="close icon">
                </button>
            </div>
            <div class="modal-body" id="modal-body-filtros">
                
                <div class="div-filtro">
                    <h1 class="h1-titulo-filtro">Filtrar por gênero</h1>
                    <br>
                    <select class="selecao-filtro" id="selectionGenero">
                        <option>Nenhum</option>
                        <option>Comédia</option>
                        <option>Drama</option>
                        <option>Aventura</option>
                    </select>
                    <input type="checkbox" class="checkbox-filtros" id="checkboxGenero">
                </div>

                <div class="div-filtro">
                    <h1 class="h1-titulo-filtro">Filtrar por ano de lançamento</h1>
                    <br>
                    <input type="number" value="2021" step="1" class="selecao-filtro" id="selectionAno" style="border: 0; padding-left: 1rem;">
                    <input type="checkbox" class="checkbox-filtros" id="checkboxAno">
                </div>

                <div class="div-filtro">
                    <h1 class="h1-titulo-filtro">Filtrar por relevância (IMDb)</h1>
                    <br>
                    <input type="number" class="selecao-filtro" id="selectionRelevancia" step="0.1" style="border: 0; padding-left: 1rem;" min="0.1" max="10" placeholder="0.1 - 10">
                    <input type="checkbox" class="checkbox-filtros" id="checkboxRelevancia">
                </div>
                
            </div>
            <div class="modal-footer" id="modal-footer-filtros">
                <button class="botao-aplicar-filtros" onclick="aplicarFiltros()">Aplicar Filtros</button>
            </div>
            </div>
        </div>
        </div>
        
                  
        <div class="div-container-slick">

            <div class="div-container-filtros">
                <img class="filtro-icon" src="../public/icons/3points_menu_icon.png" alt="Filtros" title="Filtros" data-toggle="modal" data-target="#modalFiltros">
            </div>
            
            <h1 class="titulo-carousel" id="tituloRecomendacoes">Recomendações</h1>
            
            <div class="carousel" id="carouselRecomendacoes">

            </div>

            <h1 class="titulo-carousel">Minha lista</h1>
            <div class="carousel" id="carouselMinhaLista">

                <!--
                <div id="divMinhaListaInicial">
                    <h1 class="h1-card-minha-lista">Utilize o botão  <button class="button-add-icon-minha-lista"><img src="../public/icons/white_add_icon.png" class="add-icon-minha-lista"></button></h1>   
                    <h1 class="h1-card-minha-lista">para adicionar seus filmes e séries favoritos a sua lista</h1>
                </div>
                -->

            </div>

        </div>

    </body>

    