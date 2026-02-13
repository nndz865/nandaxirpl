<?php
include "koneksi.php";

if (isset($_POST['simpan'])) {

    $nis     = htmlspecialchars($_POST['nis']);
    $nama    = htmlspecialchars($_POST['nama']);
    $kelas   = htmlspecialchars($_POST['kelas']);
    $jurusan = htmlspecialchars($_POST['jurusan']);

    if ($nis == "" || $nama == "" || $kelas == "" || $jurusan == "") {
        echo "<script>alert('Semua field wajib diisi!');</script>";
    } else {

        $stmt = mysqli_prepare($koneksi,
            "INSERT INTO siswa (nis, nama, kelas, jurusan)
             VALUES (?, ?, ?, ?)"
        );

        mysqli_stmt_bind_param($stmt, "ssss",
            $nis, $nama, $kelas, $jurusan
        );

        mysqli_stmt_execute($stmt);

        echo "<script>alert('Data berhasil ditambahkan');
              window.location='index.php';</script>";
    }
}
?>

<h2>Tambah Data Siswa</h2>
<form method="POST">
    NIS <br>
    <input type="text" name="nis"><br><br>

    Nama <br>
    <input type="text" name="nama"><br><br>

    Kelas <br>
    <input type="text" name="kelas"><br><br>

    Jurusan <br>
    <input type="text" name="jurusan"><br><br>

    <button type="submit" name="simpan">Simpan</button>
</form>