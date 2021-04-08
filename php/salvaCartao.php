<?php
// Include config file


require_once "config.php";


$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$numeroCartao = $_POST['numeroCartao'];
$validade = $_POST['validade'];
$verificador = $_POST['verificador'];
$plano = $_POST['plano'];

         $sql = "INSERT INTO cartao (nomeCliente, cpf, numeroCartao, validade, verificador, plano) VALUES (?, ?, ?, ?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sssss", $param_nome, $param_cpf, $param_numeroCartao, $param_validade, $param_verificador $param_plano);
            
            // Set parameters
            $param_nome = $nome;
            $param_cpf = $cpf;
            $param_numeroCartao = $numeroCartao;
            $param_validade = $validade;
            $param_verificador = $verificador;
            $param_plano = $plano;

            // Tenta executar a instrução preparada
            if(mysqli_stmt_execute($stmt)){
                // Registros criados com sucesso. Redirecionar para a página de destino
                header("location: ../html/cadastroFinalizado.html");
                exit();
            } else{
                echo "OUps! Algo deu errado. Por favor, tente novamente mais tarde.";
            }
        } 

?>