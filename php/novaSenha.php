<?php
require "config.php";

$email = $_POST['email'];
$senha = $_POST['senha'];



    $resultado = mysqli_query($link, "UPDATE user SET $senha = $senha WHERE email = $email");

    if ($resultado == true) {

        echo "Enviado para o banco com sucesso!";
        //die("<script type='text/javascript'> window.location.href = '../html/pagamento.html' </script>");

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }


?>