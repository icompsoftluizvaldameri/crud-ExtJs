<?php
$servidor = "127.0.0.1";

$user = 'root';

$senha = "";

$db = 'crud';

$conexao = mysqli_connect($servidor, $user, $senha) or die ("falha ao conectar com o banco");

mysqli_set_charset ( $conexao , 'utf8' );

$banco = mysqli_select_db($conexao, $db) or die ("falha ao escolher o banco de dados");
?>