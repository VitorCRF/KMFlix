<?php 
            session_start();
            $logado = $_SESSION["logado"] ?? NULL;
            if(!$logado)
                header("Location: ../html/login.php"); 
            
?>
<html>    
    <head>
        <title>Kmflix</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../css/global.css">
        <link rel="stylesheet" type="text/css" href="../css/home.css">
        <link rel="shortcut icon" href="../public/logo.png">

        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>

        <!--carousel links-->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick-theme.css">
        
        <script type="text/javascript" src="../js/home.js"></script>

    </head>

    <body>
            
        <div class="div-header">

            <div>
                <img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito">
            </div>

            <a href="../html/minhaConta.php"><img src="../public/icons/white_user_icon.png" alt="user icon" class="icon-header"></a>

            <div id="divSearch">
                <img src="../public/icons/white_search_icon.png" alt="search icon" class="icon-header" onclick="searchInput()">
            </div>

        </div>

        <div class="div-container">

            <div class="carousel">

                <div id="cardCarousel1"><img src="../public/img/breaking bad.jpeg" width="100%" height="100%" alt="breaking bad poster"></div>
                <div><img src="../public/img/vikings.jpg" width="100%" height="100%" alt="vikings poster"></div>
                <div><img src="../public/img/lost.jpg" width="100%" height="100%" alt="lost poster"></div>
                <div><img src="../public/img/interestellar.jpg" width="100%" height="100%" alt="interestellar poster"></div>
                <div><img src="../public/img/gente grande.jpg" width="100%" height="100%" alt="gente grande poster"></div>
                <div><img src="../public/img/as branquelas.jpg" width="100%" height="100%" alt="as branquelas poster"></div>
                <div><img src="../public/img/dark.png" width="100%" height="100%" alt="dark wallpaper"> <h1>texto 1</h1></div>
                <div><h1>8</h1></div>
                <div><h1>9</h1></div>
                <div><h1>10</h1></div>

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

    