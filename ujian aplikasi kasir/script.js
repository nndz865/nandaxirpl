let barang = [
    { id: 1, nama: "Laptop", harga: 7500000, stok: 10},
    { id: 2, nama: "Mouse", harga: 100000, stok: 25},
    { id: 3, nama: "Keyboard", harga: 150000, stok: 20},
    { id: 4, nama: "Headset", harga: 200000, stok: 15},
    { id: 5, nama: "Flashdisk", harga: 50000, stok: 30}
];

let keranjang = [];

function rupiah(angka){
    return angka.toLocaleString("id-ID");
}

function loadDropdown(){
    let dropdown = document.getElementById("pilihBarang");
    dropdown.innerHTML = "";

    barang.forEach(b => {
        let option = document.createElement("option");
        option.value = b.id;
        option.textContent = `${b.nama} - Rp ${rupiah(b.harga)} (Stok: ${b.stok})`;
        dropdown.appendChild(option);
    });

}

function tampilBarang(){
    let tbody = document.querySelector("#tabelBarang tbody");
    tbody.innerHTML = "";

    barang.forEach(b => {
        let tr = `
        <tr>
        <td>${b.id}</td>
        <td>${b.nama}</td>
        <td>Rp ${rupiah(b.harga)}</td>
        <td>${b.stok}</td>
        </tr>
        `;
        tbody.innerHTML += tr;
    });
}

function tambahKeranjang(){
    let idBarang = parseInt(document.getElementById("pilihBarang").value);
    let jumlah = parseInt(document.getElementById("jumlahBeli").value);

    let item = barang.find(b => b.id === idBarang);

    if(!item) return;

    if(jumlah > item.stok){
        alert("Stok tidak mencukupi!");
        return;
    }

    item.stok -= jumlah;

    keranjang.push({
        nama: item.nama,
        jumlah: jumlah,
        subtotal: item.harga * jumlah
    });

    tampilBarang();
    tampilKeranjang();
    hitungTotal();
    loadDropdown();
}

function tampilKeranjang(){
    let tbody = document.querySelector("#tabelKeranjang tbody");
    tbody.innerHTML = "";

    keranjang.forEach(k => {
        let tr = `
        <tr>
        <td>${k.nama}</td>
        <td>${k.jumlah}</td>
        <td>Rp ${rupiah(k.subtotal)}</td>
        </tr>
        `;
        tbody.innerHTML += tr;
    });
}

function hitungTotal(){
    let total = keranjang.reduce((sum, k) => sum + k.subtotal, 0);
    document.getElementById("totalBelanja").textContent =
    "Total Belanja: Rp " + rupiah(total);
}

window.onload = function(){
    loadDropdown();
    tampilBarang();
};