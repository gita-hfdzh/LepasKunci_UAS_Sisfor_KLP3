<?php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "lepas_kunci";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die(json_encode([
        "success" => false,
        "message" => "Koneksi database gagal: " . mysqli_connect_error()
    ]));
}

header("Content-Type: application/json");
?>