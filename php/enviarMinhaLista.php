<?php

session_start();
require "config.php";

$titulo_id = $_POST['titulo_id'];

$usuario_id = (int)$_SESSION["idUser"];

$usuario_id = (int)$_SESSION["idUser"];
$verifica = mysqli_query($link, "SELECT * FROM `minha_lista` WHERE `usuario_id` = $usuario_id AND `titulos_id` = $titulo_id");
if(mysqli_num_rows($verifica) > 0){
    $resultado = mysqli_query($link, "DELETE FROM minha_lista WHERE usuario_id = $usuario_id AND titulos_id = $titulo_id");
}else{
    $resultado = mysqli_query($link, "INSERT INTO minha_lista (usuario_id, titulos_id) VALUES ('$usuario_id', '$titulo_id')");
}

if ($resultado) {
    echo "Titulo adicionado e armazenado na lista de favoritos.";
}

?>