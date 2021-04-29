<?php 

    date_default_timezone_set('Etc/UTC');
    require 'config.php';
    require 'PHPMailer/PHPMailerAutoload.php';
    
    $tituloEmail = "Ativamento de Conta Kmflix";

    $emailDestinatario = $_POST["emailDestinatario"];

    $buscaInfo = mysqli_query($link, "SELECT token_conta FROM user where email = '$emailDestinatario'");

    $message = 'Olá, você se cadastrou com sucesso na Kmflix! Por favor insira este token abaixo na página de confirmação para ativar sua conta. 
    Token: ' . $buscaInfo;

    $mail= new PHPMailer;
    $mail->IsSMTP(); 
    $mail->CharSet = 'UTF-8';   
    $mail->SMTPDebug = 2;       // 0 = nao mostra o debug, 2 = mostra o debug
    $mail->SMTPAuth = true;     
    $mail->SMTPSecure = 'ssl';  
    $mail->Host = 'smtp.gmail.com'; 
    $mail->Port = 465; 
    $mail->Username = 'kmflix.contato@gmail.com'; 
    $mail->Password = 'kmflix4521';
    $mail->SetFrom('kmflix.contato@gmail.com', 'Kmflix');
    $mail->addAddress($emailDestinatario,'');
    $mail->Subject = $tituloEmail;
    $mail->msgHTML($message);

    $enviado = $mail->send();

    if ($enviado) 
    { 
    echo "Seu email foi enviado com sucesso!"; 
    } else { 
    echo "Houve um erro enviando o email: ".$mail->ErrorInfo; 
    } 

?>