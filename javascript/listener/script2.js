const angka1 = document.getElementById('angka1');
const angka2 = document.getElementById('angka2');
const hasil = document.getElementById('hasil');

const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const kali = document.getElementById('kali');
const bagi = document.getElementById('bagi');

tambah.addEventListener('click', function() {
   const a = parseFloat(angka1.value) || 0;
   const b = parseFloat(angka2.value) || 0;
   hasil.innerHTML = a + b;
});

kurang.addEventListener('click', function() {
   const a = parseFloat(angka1.value) || 0;
   const b = parseFloat(angka2.value) || 0;
   hasil.innerHTML = a - b;
});

kali.addEventListener('click', function() {
   const a = parseFloat(angka1.value) || 0;
   const b = parseFloat(angka2.value) || 0;
   hasil.innerHTML = a * b; 
});

bagi.addEventListener('click', function() {
   const a = parseFloat(angka1.value) || 0;
   const b = parseFloat(angka2.value) || 0;
   hasil.innerHTML = a / b;
});