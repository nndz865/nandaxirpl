const r = 30;
const keliling = 2 * Math.PI * r;
const luas = Math.PI * r * r;

document.getElementById('radius').textContent = `Jari-jari: ${r}`;
document.getElementById('keliling').textContent = `Keliling: ${keliling.toFixed(2)}`;
document.getElementById('luas').textContent = `Luas: ${luas.toFixed(2)}`;