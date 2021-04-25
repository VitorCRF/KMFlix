<?php
// Include config file
session_start();

require "config.php";


$nome = $_POST['nome'];
$cpf = $_POST['cpf'];
$numeroCartao = $_POST['numero'];
$validade = $_POST['validade'];
$verificador = $_POST['verificador'];
$idUsuario = $_SESSION['idUser'];

         $resultado = mysqli_query($link, "INSERT INTO cartao (nome, cpf, numero, validade, verificador, idUsuario) VALUES ('$nome', '$cpf', '$numeroCartao', '$validade', '$verificador', '$idUsuario')");

         if ($resultado == true) {

            echo "Enviado para o banco com sucesso!";
            //die("<script type='text/javascript'> window.location.href = '../html/pagamento.html' </script>");
    
        }
        else {
            echo "Algo de errado aconteceu, tente novamente";
        }
         
        

?>