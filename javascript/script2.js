let nilai = parseInt(prompt("Masukkan nilai ujian (0-100):"));

let huruf;

if (nilai >= 90 && nilai <= 100) {
  huruf = "A";
} else if (nilai >= 80 && nilai <= 89) {
  huruf = "B";
} else if (nilai >= 70 && nilai <= 79) {
  huruf = "C";
} else if (nilai >= 60 && nilai <= 69) {
  huruf = "D";
} else if (nilai >= 0 && nilai < 60) {
  huruf = "E";
} else {
  huruf = "Input tidak valid";
}

alert("Nilai huruf Anda: " + huruf);