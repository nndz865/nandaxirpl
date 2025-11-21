let tombol = document.getElementById("tombol");
let clear = document.getElementById("clear");
let nama = document.getElementById("nama");
let harga = document.getElementById("harga");
let jumlahBarang = document.getElementById("jumlahBarang");
let diskon = document.getElementById("diskon (%)");
let totalSetelahDiskon = document.getElementById("total");

tambah.addEventListener("click", () => {
    let tabel = document.getElementById("tabelBarang");

    let baris = tabel.insertRow();

    let kolom1 = baris.insertCell(0);
    let kolom2 = baris.insertCell(1);
    let kolom3 = baris.insertCell(2);
    let kolom4 = baris.insertCell(3);
    let kolom5 = baris.insertCell(4);

    let totalHarga = Number(harga.value) * Number(jumlahBarang.value);
    let hargaDiskon = totalHarga - (totalHarga * Number(diskon.value) / 100);

    kolom1.textContent = nama.value;
    kolom2.textContent = harga.value;
    kolom3.textContent = jumlahBarang.value;
    kolom4.textContent = totalHarga;
    kolom5.textContent = hargaDiskon;

    
});

clear.addEventListener("click", () => {
    nama.value = "";
    harga.value = "";
    jumlahBarang.value = "";
    diskon.value = "";
});