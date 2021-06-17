<?php 
    
	require "config.php";

    session_start();
    $email = $_SESSION["email"];

	$resultado = mysqli_query($link, "SELECT * FROM user where email = '$email'");

    $user['id'] = "";
    $retornoPlano['id'] = "";
    if(($resultado) && ($resultado -> num_rows) != 0){
        while($row_user = mysqli_fetch_assoc($resultado)){
            $user['id'] = $row_user['id'];
            $user['plano'] = $row_user['plano'];

            array_push($retornoPlano, $user);
        }
    }
    else{
        echo "Nenhum user foi encontrado!";
    }
    echo json_encode($retornoPlano);

?>