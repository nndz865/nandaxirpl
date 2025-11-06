const tambahBtn = document.getElementById('tambahBtn');

let totalKeseluruhan = 0;

tambahBtn.addEventListener('click', function() {
    const namaBarang = document.getElementById("namaBarang").value;
    const hargaBarang = parseFloat(document.getElementById("hargaSatuan").value);
    const jumlahBarang = parseInt(document.getElementById("jumlahBeli").value);

    if (!namaBarang || !hargaBarang || !jumlahBarang) {
        alert("Semua data harus diisi!");
        return;
    }

    const total = hargaSatuan * jumlahBeli;
    let diskon = 0;

    if (total >= 500000) {
        diskon = 15;
    } else if (total >= 200000) {
        diskon = 10;
    } else if (total >= 100000) {
        diskon = 5;
    }

    const hargaAkhir = total - (total * diskon / 100);

    totalKeseluruhan += hargaAkhir;

    const totalAkhir =  totalKeseluruhan - (totalKeseluruhan * diskonTambahan / 100);

    document.getElementById("totalKeseluruhan").innerText =
    `Total Keseluruhan: Rp ${totalKeseluruhan.toLocaleString()}`;
    document.getElementById("diskonTambahan").innerText =
    `Diskon Tambahan: ${diskonTambahan} > 0 ? diskonTambahan + "%" : "-"`;
    document.getElementById("totalBiayaAkhir").innerText =
    `Total Biaya Akhir: Rp ${totalAkhir.toLocaleString()}`;

});     