
<?php

require_once "config.php";

 	$senha = $_POST["campoLoginEmail"];
	$email = $_POST["campoLoginSenha"];

	$sql = mysqli_query($link,"SELECT senha FROM user where email = $email");

	echo "$sql";
			//header("location: ../index.html");
			//exit();
?>