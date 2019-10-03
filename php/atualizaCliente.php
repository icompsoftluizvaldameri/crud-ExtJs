<?php

	include("conexao.php");
    
    $info = $_POST['clientes'];
    
    $data = json_decode(stripslashes($info));
    
	$nome = $data->cli_name;
	$email = $data->email;
	$cName = $data->c_name;
	$id = $data->id_cliente;

	$query = sprintf("SELECT id_cidade FROM cidade WHERE c_name = '%s'",
	mysqli_real_escape_string($conexao, $cName));

	$rs = mysqli_query($conexao, $query);
	$cidades = mysqli_fetch_assoc($rs);
	
	$idCidade = $cidades['id_cidade'];

	$query = sprintf("UPDATE cliente SET cli_name = '%s', email = '%s', id_cidade = '%s' WHERE id_cliente=%d",
		mysqli_real_escape_string($conexao, $nome),
		mysqli_real_escape_string($conexao, $email),
		$idCidade,
        mysqli_real_escape_string($conexao, $id));
        
    $rs = mysqli_query($conexao, $query);
    

	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		"clientes" => array(
			"id_cliente" => $id,
			"cli_name" => $nome,
			"email" => $email,
			"id_cidade" => $idCidade
		)
	));
?>