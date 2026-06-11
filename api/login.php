<?php
include "db.php";

$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$role = $_POST['role'] ?? '';

if ($email == '' || $password == '' || $role == '') {
    echo json_encode([
        "success" => false,
        "message" => "Email, password, dan role wajib diisi"
    ]);
    exit;
}

if ($role == 'user') {
    $query = "SELECT id_customer AS id, nama, email, password, no_hp 
              FROM customer 
              WHERE email = '$email'";
} else if ($role == 'owner') {
    $query = "SELECT id_owner AS id, nama, email, password, no_hp, alamat 
              FROM owner 
              WHERE email = '$email'";
} else {
    echo json_encode([
        "success" => false,
        "message" => "Role tidak valid"
    ]);
    exit;
}

$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) == 1) {
    $data = mysqli_fetch_assoc($result);

    if (password_verify($password, $data['password'])) {
        echo json_encode([
            "success" => true,
            "message" => "Login berhasil",
            "user" => [
                "id" => $data['id'],
                "nama" => $data['nama'],
                "email" => $data['email'],
                "no_hp" => $data['no_hp'],
                "role" => $role,
                "alamat" => $data['alamat'] ?? ''
            ]
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Password salah"
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Akun tidak ditemukan"
    ]);
}
?>