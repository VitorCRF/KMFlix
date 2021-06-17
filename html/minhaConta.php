<?php
    session_start();
    $logado = $_SESSION["logado"] ?? NULL;
    $admin = $_SESSION["isAdmin"] ?? NULL;
    if(!$logado)
        header("Location: /stream/html/login.php"); 
    if(isset($_GET['logout']) && $_GET['logout'] == 1){
        $_SESSION = array();
        session_destroy();
        header("Location: ../"); 
    }   
?>
<html>
    <head>
        <title>Kmflix | Minha Conta</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="../css/global.css">
        <link rel="stylesheet" type="text/css" href="../css/minhaConta.css">
        <link rel="shortcut icon" href="../public/logo.png">
        <script type="text/javascript" src="../js/sjcl.js"></script>     
        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
        <script type="text/javascript" src="../js/minhaConta.js"></script>
    </head>

    <body>

        <header>
            <div class="div-header">
                <div>
                    <a href="../home/index.php"><img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito"></a>
                </div>
                
                <img src="../public/icons/white_gear_icon.png" class="icon-header" alt="options icon">
                <a href="../home/index.php"><img src="../public/icons/white_home_icon.png" class="icon-header" alt="home icon"></a>
                
            </div>
        </header>

        <div class="div-container">

            <div class="div-opcoes-conta">

                <h1 class="titulo-boasvindas"><?php echo "Olá, " . $_SESSION["nome"] . '!' ?></h1>
                <h2 class="titulo-atributo">Forma de pagamento</h2>

                <div class="div-cartao">

                    <p class="p-nome-cartao"><?php echo $_SESSION['nome'];?></p>
                    <p class="p-numero-cartao">8888 xxxx xxxx 8889</p>
                    <p class="p-data-validade">10/21</p>

                </div>

                <a class="p-alterar-atributo" href="../html/pagamento.php">Alterar dados de pagamento</a>
                <p class="p-alterar-atributo">Alterar plano</p>

                <h2 class="titulo-atributo">Segurança da conta</h2>

                <a class="p-alterar-atributo" href="cadastrarTitulo.php" id="criarTitulo" style="padding-top: 0.5rem; padding-bottom: 0.5rem;">Cadastrar título</a>
                
                <div id="divAlterarSenha">
                    <a class="p-alterar-atributo" id="alterarSenha" href="alterarSenha.html">Alterar senha</a>
                </div>

                <div id="divAlterarEmail">
                    <p class="p-alterar-atributo" id="alterarEmail" onclick="alterarEmail()">Alterar email</p>
                </div>         
                <div id="divSair">
                    <a class="p-alterar-atributo" href="?logout=1" id="sair" onclick="logOut()">Sair</a>
                </div>

            </div>

        </div>

    </body>

</html>