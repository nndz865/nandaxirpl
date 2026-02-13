<?php
include "koneksi.php";
$data = mysqli_query($koneksi, "SELECT * FROM siswa");
?>

<h2>Data Siswa</h2>
<a href="tambah.php">Tambah Data</a>
<br><br>

<table border="1" cellpadding="8">
<tr>
    <th>No</th>
    <th>NIS</th>
    <th>Nama</th>
    <th>Kelas</th>
    <th>Jurusan</th>
    <th>Aksi</th>
</tr>

<?php
$no = 1;
while ($row = mysqli_fetch_assoc($data)) {
?>
<tr>
    <td><?= $no++; ?></td>
    <td><?= htmlspecialchars($row['nis']); ?></td>
    <td><?= htmlspecialchars($row['nama']); ?></td>
    <td><?= htmlspecialchars($row['kelas']); ?></td>
    <td><?= htmlspecialchars($row['jurusan']); ?></td>
    <td>
        <a href="edit.php?id=<?= $row['id']; ?>">Edit</a> |
        <a href="hapus.php?id=<?= $row['id']; ?>"
           onclick="return confirm('Yakin ingin menghapus?')">
           Hapus
        </a>
    </td>
</tr>
<?php } ?>
</table>