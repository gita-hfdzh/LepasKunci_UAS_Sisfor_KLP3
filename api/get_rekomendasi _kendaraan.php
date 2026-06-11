<?php
include "db.php";

$jenis = $_GET['jenis'] ?? '';

if ($jenis != 'Mobil' && $jenis != 'Motor') {
    echo json_encode([
        "success" => false,
        "message" => "Jenis kendaraan tidak valid"
    ]);
    exit;
}

$query = "SELECT 
            k.id_kendaraan,
            k.nama_kendaraan,
            k.jenis,
            k.plat_nomor,
            k.harga_sewa,
            k.status,
            k.tipe,
            k.tahun,
            k.transmisi,
            k.bahan_bakar,
            k.jumlah_kursi,
            k.deskripsi,
            k.gambar,
            o.nama AS nama_owner
          FROM kendaraan k
          JOIN owner o ON k.id_owner = o.id_owner
          WHERE k.jenis = '$jenis'
          ORDER BY k.id_kendaraan ASC
          LIMIT 5";

$result = mysqli_query($conn, $query);

$data = [];

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode([
    "success" => true,
    "data" => $data
]);
?>