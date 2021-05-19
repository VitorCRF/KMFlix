<?php 

    session_start();
    require "config.php";

    $user_id;

    $buscaInfo = mysqli_query($link, "SELECT * FROM minha_lista where user_id = '$user_id'");

    if ($buscaInfo == true) {

        $result = mysqli_fetch_assoc($buscaInfo);
		

		$retorno["status"] = "s";
		$retorno["mensagem"] = "Usuario autenticado com sucesso!";

    }
    else {
        echo "Algo de errado aconteceu, tente novamente";
    }

    echo json_encode($retorno);

?>