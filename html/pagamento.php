<?php
// Include config file
    session_start();
    $logado = $_SESSION["logado"] ?? NULL;
    if(!$logado)
        header("Location: /stream/html/cadastro.html"); 
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/pagamento.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="shortcut icon" href="../public/logo.png">
    <link rel="stylesheet" type="text/css" href="../css/global.css">
    <link rel="stylesheet" type="text/css" href="../css/pagamento.css">
    

    <title>Kmflix | Pagamento</title>
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
                <table id="tableCartao">                   
                    <tr id="rowNome">
                        <td colspan="2">
                            <label for="Nome" class="labelCadastro">Nome </label>
                            <input class="form-control" name="nome" id="Nome" type="text" placeholder="Nome Completo" ">
                        </td>
                    </tr>
                    <tr id="rowCpf">
                        <td colspan="2">
                            <label for="CPF" class="labelCadastro">CPF</label>
                            <input class="form-control" name="cpf" id="CPF" type="text" placeholder="Apenas números" ">

                        </td>
                    </tr>
                    <tr id="rowCartao">
                        <td colspan="2">
                            <label for="Cartao" class="labelCadastro">Número do cartão</label>
                            <input class="form-control" name="numeroCartao" id="Cartao" type="text" placeholder="ex: 8888 8888 9999 9999"">
                        </td>
                    </tr>
                    <tr id="rowCcv">
                        <td>
                            <label for="DigitoCartao" class="labelCadastro">CCV</label>
                            <input class="form-control verifica" name="verificador" id="DigitoCartao" type="text" size="5" placeholder="ex: 932"">

                        </td>
                        <td>
                            <label for="Validade" class="labelCadastro">Validade</label>
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