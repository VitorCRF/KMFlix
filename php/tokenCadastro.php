<?php

    require "config.php";

    $token = $_POST['token'];
    $email = $_POST['email'];

    $buscaInfo = mysqli_query($link, "SELECT token_conta FROM user where email = '$email'");

    if ($buscaInfo) {
        $result = mysqli_fetch_assoc($buscaInfo);
        $tokenBanco = $result["token_conta"];
        $true = true;

        if ($token == $tokenBanco) {
            echo "entrou na verificacao";
            $update = mysqli_query($link, "UPDATE user 
            SET `conta_ativa` = '$true'");      
        }
        else {
            echo "else verificacao";
        }
        
    }

?>