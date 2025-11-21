// ===============================
        // DATA BARANG (20 items)
        // ===============================
        let barang = [
            { id: 1, nama: "Laptop", harga: 7500000, stok: 10 },
            { id: 2, nama: "Mouse", harga: 100000, stok: 25 },
            { id: 3, nama: "Keyboard", harga: 150000, stok: 20 },
            { id: 4, nama: "Headset", harga: 200000, stok: 15 },
            { id: 5, nama: "Flashdisk", harga: 50000, stok: 30 },
            { id: 6, nama: "Monitor", harga: 1250000, stok: 8 },
            { id: 7, nama: "Printer", harga: 950000, stok: 5 },
            { id: 8, nama: "Kabel HDMI", harga: 30000, stok: 40 },
            { id: 9, nama: "Webcam", harga: 250000, stok: 12 },
            { id: 10, nama: "Speaker", harga: 100000, stok: 18 },
            { id: 11, nama: "Harddisk 1TB", harga: 750000, stok: 10 },
            { id: 12, nama: "SSD 512GB", harga: 950000, stok: 9 },
            { id: 13, nama: "RAM 8GB", harga: 450000, stok: 14 },
            { id: 14, nama: "CPU Fan", harga: 85000, stok: 22 },
            { id: 15, nama: "Mousepad", harga: 20000, stok: 50 },
            { id: 16, nama: "Proyektor", harga: 3200000, stok: 5 },
            { id: 17, nama: "Router Wifi", harga: 350000, stok: 12 },
            { id: 18, nama: "Kabel LAN", harga: 15000, stok: 100 },
            { id: 19, nama: "UPS", harga: 600000, stok: 6 },
            { id: 20, nama: "Scanner", harga: 850000, stok: 7 },
        ];

        let keranjang = [];

        // FUNGSI MEMFORMAT ANGKA RUPIAH
        function rupiah(angka) {
            return angka.toLocaleString("id-ID");
        }

        // ===============================
        // LOAD DROPDOWN BARANG
        // ===============================
        function loadDropdown() {
            let dropdown = document.getElementById("pilihBarang");
            dropdown.innerHTML = "";

            barang.forEach(b => {
                let option = document.createElement("option");
                option.value = b.id;
                option.textContent = `${b.nama} - Rp ${rupiah(b.harga)} (Stok: ${b.stok})`;
                dropdown.appendChild(option);
            });
        }

        // ===============================
        // TAMPILKAN TABEL BARANG
        // ===============================
        function tampilBarang() {
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

        // ===============================
        // TAMBAH KE KERANJANG
        // ===============================
        function tambahKeranjang() {
            let idBarang = parseInt(document.getElementById("pilihBarang").value);
            let jumlah = parseInt(document.getElementById("jumlahBeli").value);

            let item = barang.find(b => b.id === idBarang);

            if (!item) return;

            // CEK STOK
            if (jumlah > item.stok) {
                alert("Stok tidak mencukupi!");
                return;
            }

            // KURANGI STOK
            item.stok -= jumlah;

            // MASUKKAN KE KERANJANG
            keranjang.push({
                nama: item.nama,
                jumlah: jumlah,
                subtotal: item.harga * jumlah
            });

            // UPDATE TABEL
            tampilBarang();
            tampilKeranjang();
            hitungTotal();
            loadDropdown();
        }

        // ===============================
        // TAMPILKAN KERANJANG
        // ===============================
        function tampilKeranjang() {
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

        // ===============================
        // HITUNG TOTAL BELANJA
        // ===============================
        function hitungTotal() {
            let total = keranjang.reduce((sum, k) => sum + k.subtotal, 0);
            document.getElementById("totalBelanja").textContent =
                "Total Belanja: Rp " + rupiah(total);
        }

        // ===============================
        // LOAD AWAL
        // ===============================
        window.onload = function () {
            loadDropdown();
            tampilBarang();
        };