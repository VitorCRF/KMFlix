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
                    <table id="tableCadastro">
                        <tr id="rowNome">
                            <td>
                                <label for="nome">Senha atual</label>
                                <input type="password" placeholder="Senha" id="campoNome" class="form-control">
                                <input type="hidden" placeholder="Senha" name="senhaAtualHash" id="senhaAtualHash" class="form-control">
                            </td>
                        </tr>                  
                
                        <tr id="rowSenha">
                            <td>
                                <label for="senha">Nova senha</label>
                                <input type="password" placeholder="Nova senha" name="senha" id="campoSenha" class="form-control"> 
                                <input type="hidden" placeholder="Nova senha" name="novaSenhaHash" id="novaSenhaHash" class="form-control"> 

                            </td>
                        </tr>
                        <tr id="rowConfirmarSenha">
                            <td>
                                <label for="confirmaSenha">Confirmar senha</label>
                                <input type="password" placeholder="Confirme sua senha" name="confirmaSenha" id="campoConfirmaSenha" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <button class="btn btn-primary" id="botaoProsseguir">Prosseguir</button>
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <br><a href="../home/index.php"><p class="p-link">Voltar</p></a>
                            </td>
                        </tr>
                    </table>
        </div>

        

    </body>
</html>