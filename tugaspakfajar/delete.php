<?php
include "koneksi.php";

$id = $_GET['id'];

$stmt = mysqli_prepare($koneksi,
    "DELETE FROM siswa WHERE id = ?"
);

mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);

echo "<script>alert('Data berhasil dihapus');
      window.location='index.php';</script>";
?>