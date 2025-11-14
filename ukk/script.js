// element references
const tambah = document.getElementById('tambah');
const clear = document.getElementById('clear');
const nama = document.getElementById('nama');
const harga = document.getElementById('harga');
const jumlahBarang = document.getElementById('jumlahBarang');
const diskonInput = document.getElementById('diskon');

tambah.addEventListener('click', () => {
    const tabel = document.getElementById('tabelBarang');

    const baris = tabel.insertRow();

    const kolom1 = baris.insertCell(0);
    const kolom2 = baris.insertCell(1);
    const kolom3 = baris.insertCell(2);
    const kolom4 = baris.insertCell(3);
    const kolom5 = baris.insertCell(4);

    
    let totalHarga = Number(harga,value) * Number(jumlahBarang.value);
    let discounted = Number((totalHarga * (1 - Number.min(Number.max(diskonPercent, 0), 100) / 100)) * 100) / 100;

    kolom1.textContent = nama.value || '-';
    kolom2.textContent = harga.value;
    kolom3.textContent = jumlahBarang.value;
    kolom4.textContent = diskonPercent + ' %';
    kolom5.textContent = discounted;

    nama.value = '';
    harga.value = '';
    jumlahBarang.value = '';
});

clear.addEventListener('click', () => {
    nama.value = '';
    harga.value = '';
    jumlahBarang.value = '';
    diskonInput.value = '';

    const tabel = document.getElementById('tabelBarang');
    while (tabel.rows.length > 1) tabel.deleteRow(1);
});