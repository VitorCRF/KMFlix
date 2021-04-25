<?php
// Include config file
session_start();
$logado = $_SESSION["logado"] ?? NULL;
if($logado)
    header("Location: ../home/index.php"); 
    ?>
<!DOCTYPE html>
<html>
    <head>
        <title>Kmflix | Cadastro</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
        <script type="text/javascript" src="../js/cadastroScript.js"></script>
        <script type="text/javascript" src="../js/sjcl.js"></script>      
        <link rel="shortcut icon" href="../public/logo.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="../css/global.css">
        <link rel="stylesheet" type="text/css" href="../css/cadastro.css">
    </head>

    <body>
        <header>
            <div class="div-header">
                <div>
                    <img src="../public/logo_escrito.png" alt="Kmflix" class="logo-escrito">
                    <a href="../html/login.php"><button class="botao-entrar">Entrar</button></a>
                    <a href="../html/cadastro.php"><button class="botao-assinar">Assine</button></a>
                </div>
            </div>
        </header>
        <div class="div-container">
                    <table id="tableCadastro">
                        <tr id="rowNome">
                            <td>
                                <label for="nome">Nome</label>
                                <input type="text" placeholder="Nome Completo" name="nome" id="campoNome" class="form-control">
                            </td>
                        </tr>
                    
                        <tr id="rowNascimento">
                            <td>
                                <label for="nascimento">Data de nascimento</label>
                                <input type="date" placeholder="01/01/2001" name="nascimento" id="campoNascimento" class="form-control">
                            </td>
                        </tr>
                        
                        <tr id="rowEmail">
                            <td>
                                <label for="email">Email</label>
                                <input type="text" placeholder="seu@email.com" name="email" id="campoEmail" class="form-control"> 
                            </td>
                        </tr>
                        <tr id="rowSenha">
                            <td>
                                <label for="senha">Senha</label>
                                <input type="password" placeholder="Senha" name="senha" id="campoSenha" class="form-control"> 
                            </td>
                        </tr>
                        <tr id="rowConfirmarSenha">
                            <td>
                                <label for="confirmaSenha">Confirmar senha</label>
                                <input type="password" placeholder="Confirme sua Senha" name="confirmaSenha" id="campoConfirmaSenha" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <button class="btn btn-primary" id="botaoProsseguir">Prosseguir</button>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <br><a href="login.html"><p class="p-link">Já possuo uma conta.</p></a>
                            </td>
                        </tr>
                    </table>
        </div>

        

    </body>

</html>