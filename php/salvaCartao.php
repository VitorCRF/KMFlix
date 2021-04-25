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

        $busca = mysqli_query($link, "SELECT * FROM cartao WHERE idUsuario = '$idUsuario'");

        if(mysqli_num_rows($busca) = 0){
            $resultado = mysqli_query($link, "INSERT INTO cartao (nome, cpf, numero, validade, verificador, idUsuario) VALUES ('$nome', '$cpf', '$numeroCartao', '$validade', '$verificador', '$idUsuario')");    
        }else{
            $resultado = mysqli_query($link, "UPDATE cartao (nome, cpf, numero, validade, verificador, idUsuario) SET ('$nome', '$cpf', '$numeroCartao', '$validade', '$verificador', '$idUsuario')");
        }
         

         
         
        

?>