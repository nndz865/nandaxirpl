<?php
include "koneksi.php";

$id = $_GET['id'];

$stmt = mysqli_prepare($koneksi,
    "SELECT * FROM siswa WHERE id = ?"
);
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {

    $nis     = htmlspecialchars($_POST['nis']);
    $nama    = htmlspecialchars($_POST['nama']);
    $kelas   = htmlspecialchars($_POST['kelas']);
    $jurusan = htmlspecialchars($_POST['jurusan']);

    $update = mysqli_prepare($koneksi,
        "UPDATE siswa SET nis=?, nama=?, kelas=?, jurusan=? WHERE id=?"
    );

    mysqli_stmt_bind_param($update, "ssssi",
        $nis, $nama, $kelas, $jurusan, $id
    );

    mysqli_stmt_execute($update);

    echo "<script>alert('Data berhasil diupdate');
          window.location='index.php';</script>";
}
?>

<h2>Edit Data Siswa</h2>
<form method="POST">
    NIS <br>
    <input type="text" name="nis" value="<?= $row['nis']; ?>"><br><br>

    Nama <br>
    <input type="text" name="nama" value="<?= $row['nama']; ?>"><br><br>

    Kelas <br>
    <input type="text" name="kelas" value="<?= $row['kelas']; ?>"><br><br>

    Jurusan <br>
    <input type="text" name="jurusan" value="<?= $row['jurusan']; ?>"><br><br>

    <button type="submit" name="update">Update</button>
</form>