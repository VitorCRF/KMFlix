<?php
// Include config file


require_once "config.php";


$nome = $_POST['nome'];
$nascimento = $_POST['nascimento'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$confirmaSenha = $_POST['confirmaSenha'];

        $hash = hash('sha256', $senha);

        $sql = "INSERT INTO user (nome, nascimento, email, senha, confirmaSenha) VALUES (?, ?, ?, ?, ?)";
         
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sssss", $param_nome, $param_nascimento, $param_email, $param_senha, $param_confirmaSenha);
            
            // Set parameters
            $param_nome = $nome;
            $param_nascimento = $nascimento;
            $param_email = $email;
            $param_senha = $hash;
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

?>