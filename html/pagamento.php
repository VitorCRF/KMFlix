
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <script type="text/javascript" src="../js/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="../js/pagamento.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../public/logo.png">
    <link rel="stylesheet" type="text/css" href="../css/global.css">
    <link rel="stylesheet" type="text/css" href="../css/pagamento.css">
    

    <title>Kmflix | Pagamento</title>
</head>

<body>

    <div class="div-container">

        <div id="divCamposCartao">
            <form method="POST" action="salvaCartao.php">
                <table >
                    <tr>
                        <td colspan="2">
                            <p class="p-nome-campo">Insira os dados do cartão:</p>
                        </td>
                    </tr>       
                    <tr>
                        <td colspan="2">
                            <p class="p-nome-campo">Nome do titular do cartão:</p>
                            <input class="campo-text-input" name="nome" id="Nome" type="text" placeholder="Nome Completo" ">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="p-nome-campo">CPF:</p>
                            <input class="campo-text-input" name="cpf" id="CPF" type="text" placeholder="Apenas números" ">

                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <p class="p-nome-campo" >Número do cartão:</p>
                            <input class="campo-text-input" name="numeroCartao" id="Cartao" type="text" placeholder="ex: 8888 8888 9999 9999"">

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="p-nome-campo">Dígito verificador:</p>
                            <input class="verificaCartao" name="verificador" id="DigitoCartao" type="text" size="5" placeholder="ex: 932"">

                        </td>
                        <td>
                            <p class="p-nome-campo">Data de validade:</p>
                            <input class="verificaCartao" name="validade" id="Validade" type="text" size="5" placeholder="mm/aa"">

                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2">
                            <button type="submit" class="botao-prosseguir" value="Submit" id="botaoProsseguir">Prosseguir</button>
                        </td>
                    </tr>      
                </table>   
            </form>  
        </div>

    </div>
    
</body>
</html>