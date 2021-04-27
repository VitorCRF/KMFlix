<?php
session_start();
require "config.php";

$senhaAtualHash = $_POST['senhaAtualHash'];
$novaSenhaHash = $_POST['novaSenhaHash'];




    $resultado = mysqli_query($link, "INSERT INTO user (nome, nascimento, email, senha) VALUES ('$nome', '$nascimento', '$email', '$senha')");

    if ($resultado == true) {

        echo "Enviado para o banco com sucesso!";
        //die("<script type='text/javascript'> window.location.href = '../html/pagamento.html' </script>");

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }


?>