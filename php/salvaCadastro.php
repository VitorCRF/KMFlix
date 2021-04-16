<?php
// Include config file

date_default_timezone_set('Etc/UTC');
require_once "config.php";

$nome = $_POST['nome'];
$nascimento = $_POST['nascimento'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confirmaSenha = $_POST['confirmaSenha'];


    $resultado = mysqli_query($link, "INSERT INTO user (nome, nascimento, email, senha, confirmaSenha) VALUES ('$nome', '$nascimento', '$email', '$senha', '$confirmaSenha')");

    if ($resultado == true) {

        header("location: ../html/pagamento.html");

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }








        /*
        $sql = "INSERT INTO user (nome, nascimento, email, senha, confirmaSenha) VALUES (?, ?, ?, ?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sssss", $nome, $nascimento, $email, $senha, $confirmaSenha);
            
            // Set parameters
            $param_nome = $nome;
            $param_nascimento = $nascimento;
            $param_email = $email;
            $param_senha = $senha;
            $param_confirmaSenha = $confirmaSenha;

            // Tenta executar a instrução preparada
            if(mysqli_stmt_execute($stmt)){
                // Registros criados com sucesso. Redirecionar para a página de destino
                header("location: ../html/pagamento.html");
                exit();
            } else{
                echo "OUps! Algo deu errado. Por favor, tente novamente mais tarde.";
            }
        } 
        */

?>