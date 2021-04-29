<?php
session_start();
require "config.php";

$email = $_POST['email'];
$dataNascimento = $_POST['nascimento'];
$senha = $_POST['senha'];


    $resultado;
    $busca = mysqli_query($link, "SELECT * FROM user WHERE email = '$email' AND nascimento = '$dataNascimento'");
        if(mysqli_num_rows($busca) > 0){
            $resultado = mysqli_query($link, "UPDATE user 
            SET `senha` = '$senha' WHERE email = '$email'");   
            echo "senha atualizada com sucesso!";      
        }else{
            $resultado = false;
        }

    if ($resultado == true) {

        echo "Enviado para o banco com sucesso!";
        //die("<script type='text/javascript'> window.location.href = '../html/pagamento.html' </script>");

    }
    else {
        echo "Algo de errado aconteceu, tente novamente " .$email .$dataNascimento .$senha;
    }


?>