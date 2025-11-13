let tombol = document.getElementById("tombol");
let clear = document.getElementById("clear");
let nama = document.getElementById("nama");
let harga = document.getElementById("harga");
let jumlahBarang = document.getElementById("jumlahBarang");

tambah.addEventListener("click", () => {
    let tabel = document.getElementById("tabelBarang");

    let baris = tabel.insertRow();

    let kolom1 = baris.insertCell(0);
    let kolom2 = baris.insertCell(1);
    let kolom3 = baris.insertCell(2);
    let kolom4 = baris.insertCell(3);

    let totalHarga = Number(harga.value) * Number(jumlahBarang.value);

    kolom1.textContent = nama.value;
    kolom2.textContent = harga.value;
    kolom3.textContent = jumlahBarang.value;
    kolom4.textContent = totalHarga;

    
});

clear.addEventListener("click", () => {
    nama.value = "";
    harga.value = "";
    jumlahBarang.value = "";
});