<?php
include "db.php";

$nama = $_POST['nama'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$no_hp = $_POST['no_hp'] ?? '';
$alamat = $_POST['alamat'] ?? '';

if ($nama == '' || $email == '' || $password == '' || $no_hp == '') {
    echo json_encode([
        "success" => false,
        "message" => "Nama, email, password, dan no HP wajib diisi"
    ]);
    exit;
}

$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

$query = "INSERT INTO owner (nama, email, password, no_hp, alamat)
          VALUES ('$nama', '$email', '$hashedPassword', '$no_hp', '$alamat')";

if (mysqli_query($conn, $query)) {
    echo json_encode([
        "success" => true,
        "message" => "Akun owner berhasil dibuat"
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Gagal daftar owner: " . mysqli_error($conn)
    ]);
}
?>