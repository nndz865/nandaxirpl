<!DOCTYPE html>
<html lang="id">
<head>
    <title>Biodata Diri</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <h1>Biodata Diri</h1>
        <?php
        $nama = "Nanda setyawan wijatmiko";
        $ttl = "Yogyakarta, 11 april 08";
        $alamat = "Gondomanan";
        $hobi = "Membaca, Coding";
        ?>
        <table>
            <tr><td>Nama</td><td>:</td><td><?php echo $nama; ?></td></tr>
            <tr><td>Tempat, Tanggal Lahir</td><td>:</td><td><?php echo $ttl; ?></td></tr>
            <tr><td>Alamat</td><td>:</td><td><?php echo $alamat; ?></td></tr>
            <tr><td>Hobi</td><td>:</td><td><?php echo $hobi; ?></td></tr>
        </table>
</body>
</html>
