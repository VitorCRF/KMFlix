<?php
// Include config file
    session_start();
    $logado = $_SESSION["logado"] ?? NULL;
    if(!$logado)
        header("Location: /login.php"); 
?>
<!DOCTYPE html>
<html lang="en">
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
                    <a href="../html/cadastro.html"><button class="botao-assinar">Assine</button></a>
                </div>
            </div>
        </header>
        <div class="div-container">
        <table id="tableCartao">                   
                    <tr id="rowNome">
                        <td colspan="2">
                            <label for="Nome">Nome </label>
                            <input class="form-control" name="nome" id="Nome" type="text" placeholder="Nome Completo" ">
                        </td>
                    </tr>
                    <tr id="rowCpf">
                        <td colspan="2">
                            <label for="CPF">CPF</label>
                            <input class="form-control" name="cpf" id="CPF" type="text" placeholder="Apenas números" ">

                        </td>
                    </tr>
                    <tr id="rowCartao">
                        <td colspan="2">
                            <label for="Cartao">Número do cartão</label>
                            <input class="form-control" name="numeroCartao" id="Cartao" type="text" placeholder="ex: 8888 8888 9999 9999"">
                        </td>
                    </tr>
                    <tr id="rowCcv">
                        <td>
                            <label for="DigitoCartao">CCV</label>
                            <input class="form-control verifica" name="verificador" id="DigitoCartao" type="text" size="5" placeholder="ex: 932"">

                        </td>
                        <td>
                            <label for="Validade">Validade</label>
                            <input class="form-control verifica" name="validade" id="Validade" type="text" size="5" placeholder="mm/aa"">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2">
                            <button type="submit" class="btn btn-primary" value="Submit" id="botaoProsseguir">Prosseguir</button>
                        </td>
                    </tr>      
                </table>   
        </div>
    </body>
</html>