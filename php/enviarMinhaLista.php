<?php

session_start();
require "config.php";

$titulo_id = $POST['titulo_id'];

$usuario_id = $_SESSION["idUser"];

    $resultado = mysqli_query($link, "INSERT INTO minha_lista (usuario_id, titulos_id) VALUES ('$usuario_id', '$titulo_id')");

    if ($resultado == True) {
        echo "php minha lista enviado para o banco";
    }

?>