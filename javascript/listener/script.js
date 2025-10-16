const MasukkanNama = document.getElementById('MasukkanNama');
const MasukkanKelas = document.getElementById('MasukkanKelas');
const MasukkanAbsen = document.getElementById('MasukkanAbsen');

const nama = document.getElementById('nama');
const kelas = document.getElementById('kelas');
const absen = document.getElementById('absen');

MasukkanNama.addEventListener('input', function(e) {
    console.log(e.target.value);

    nama.innerHTML = e.target.value;
});
MasukkanKelas.addEventListener('input', function(e) {
    console.log(e.target.value);
    kelas.innerHTML = e.target.value;
});
MasukkanAbsen.addEventListener('input', function(e) {
    console.log(e.target.value);
    absen.innerHTML = e.target.value;
});