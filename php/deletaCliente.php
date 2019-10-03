<?php
include('conexao.php');

$info = $_POST['clientes'];

$data = json_decode(stripslashes($info));

$id = $data->id_cliente;

$query = sprintf("DELETE FROM cliente WHERE id_cliente=%d",
    mysqli_real_escape_string($conexao, $id));

$rs = mysqli_query($conexao, $query);

echo json_encode(array(
    "success" => mysqli_errno($conexao) == 0
));
?>