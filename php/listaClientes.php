<?php
	//chama o arquivo de conexão com o bd
    include("conexao.php");
    
	//$start = $_REQUEST['start'];
    //$limit = $_REQUEST['limit'];
    
    $queryString = "SELECT id_cliente, cli_name, email, c_name FROM cliente as c JOIN cidade as cid on c.id_cidade = cid.id_cidade";
    
	//consulta sql
    $query = mysqli_query($conexao, $queryString) or die(mysqli_error($conexao));
    
    //faz um looping e cria um array com os campos da consulta

	$clientes = array();
	while($cliente = mysqli_fetch_assoc($query)) {
	    $clientes[] = $cliente;
	}


	//consulta total de linhas na tabela
	//$queryTotal = mysqli_query($conexao, 'SELECT count(*) as num FROM cliente') or die(mysqli_error($conexao));
	//$row = mysqli_fetch_assoc($queryTotal);
    //$total = $row['num'];
    
    //encoda para formato JSON
	echo json_encode(array(
		"success" => mysqli_errno($conexao) == 0,
		//"total" => $total,
		"clientes" => $clientes
	));
?>