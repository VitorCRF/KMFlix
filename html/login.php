
<?php 
    session_start();
    $logado = $_SESSION["logado"] ?? NULL;
    if($logado) {
        header("Location: ../home/index.php"); 
    }   
        
?>
<html>

<head>
    <title>Kmflix | Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/global.css">
    <link rel="stylesheet" type="text/css" href="../css/login.css">
    <link rel="shortcut icon" href="../public/logo.png">
    
    <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/sjcl.js"></script>   
    <script type="text/javascript" src="../js/Login.js"></script>

</head>

<body>
    <header>
        <div class="div-header">
            <div>
                <a href="../"><img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito"></a>
                <a href="../html/login.php"><button class="botao-entrar">Entrar</button></a>
                <a href="../html/cadastro.php"><button class="botao-assinar">Assine</button></a>
            </div>
        </div>
    </header>
    <div class="div-container">
        <form id="form-login">
            <table>
                <tr>
                    <td>
                        <label for="nome">Email</label>
                        <input type="text" placeholder="Email" name="email" class="form-control" id="campoLoginEmail">
                    </td>                 
                </tr>                
                <tr>
                    <td>
                        <label for="nome">Senha</label>
                        <input type="password" placeholder="Senha" class="form-control" id="senha">
                        <input type="hidden" name="senhaHash" id="senhaHash">
                    </td>
                </tr>              
                <tr>
                    <td align="center">
                        <button class="btn btn-primary" id="botaoProsseguir">Prosseguir</button>
                    </td>
                </tr>
                <tr>
                    <td><br>
                        <a href="recuperarSenha.html">
                            <p class="p-link">Perdi minha senha.</p>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="cadastro.php">
                            <p class="p-link">Não possui uma conta?</p>
                        </a>
                    </td>
                </tr>
            </table>
        </form>

    </div>

</body>

</html>