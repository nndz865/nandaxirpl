const aktif = document.getElementById("aktif");
const tidakAktif = document.getElementById("tidakAktif");

let status = document.getElementById("status");

aktif.addEventListener("click", (e) => {
    aktif.innerHTML = "Hidup";
    status.innerHTML = "Status: Aktif";
    
});

tidakAktif.addEventListener("click", (e) => {
    tidakAktif.innerHTML = "Mati";
    status.innerHTML = "Status: Tidak Aktif";
});