// Aplikasi kasir sederhana (client-side)
const produk = [
  {id:1, nama:'Pensil', harga:3000, stok:50},
  {id:2, nama:'Buku Tulis', harga:12000, stok:30},
  {id:3, nama:'Penghapus', harga:2000, stok:40},
  {id:4, nama:'Pulpen', harga:5000, stok:25},
  {id:5, nama:'Penggaris', harga:7000, stok:15}
];

let keranjang = [];

function formatRupiah(n){return n.toLocaleString('id-ID')}

function $(s){return document.querySelector(s)}

function loadProdukList(){
  const tbody = $('#produkTable tbody'); tbody.innerHTML='';
  produk.forEach(p=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${p.id}</td><td>${p.nama}</td><td>Rp ${formatRupiah(p.harga)}</td><td>${p.stok}</td>`;
    tbody.appendChild(tr);
  });
}

function loadProdukSelect(){
  const sel = $('#produkSelect'); sel.innerHTML='';
  produk.forEach(p=>{
    const opt = document.createElement('option');
    opt.value = p.id; opt.textContent = `${p.nama} - Rp ${formatRupiah(p.harga)} (Stok: ${p.stok})`;
    sel.appendChild(opt);
  });
}

function tambahKeKeranjang(){
  const id = parseInt($('#produkSelect').value,10);
  const qty = parseInt($('#qtyInput').value,10) || 1;
  const item = produk.find(p=>p.id===id);
  if(!item) return alert('Produk tidak ditemukan');
  if(qty <= 0) return alert('Jumlah harus > 0');
  if(qty > item.stok) return alert('Stok tidak mencukupi');

  // kurangi stok di produk
  item.stok -= qty;

  // jika sudah ada di keranjang, tambahkan qty
  const existing = keranjang.find(k=>k.id===id);
  if(existing){ existing.qty += qty; existing.subtotal = existing.qty * item.harga; }
  else keranjang.push({id:item.id, nama:item.nama, harga:item.harga, qty:qty, subtotal: item.harga * qty});

  renderCart(); loadProdukList(); loadProdukSelect();
}

function renderCart(){
  const tbody = $('#cartTable tbody'); tbody.innerHTML='';
  keranjang.forEach(k=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${k.nama}</td>
      <td>
        <input type="number" min="1" value="${k.qty}" data-id="${k.id}" class="qtyInput" style="width:70px;padding:4px" />
      </td>
      <td>Rp ${formatRupiah(k.subtotal)}</td>
      <td><button class="removeBtn" data-id="${k.id}">Hapus</button></td>
    `;
    tbody.appendChild(tr);
  });
  attachCartEvents(); updateTotal();
}

function attachCartEvents(){
  document.querySelectorAll('.removeBtn').forEach(btn=>{
    btn.onclick = (e)=>{
      const id = parseInt(e.target.dataset.id,10);
      hapusDariKeranjang(id);
    };
  });

  document.querySelectorAll('.qtyInput').forEach(inp=>{
    inp.onchange = (e)=>{
      const id = parseInt(e.target.dataset.id,10);
      const newQty = Math.max(1, parseInt(e.target.value,10) || 1);
      ubahQty(id, newQty);
    };
  });
}

function ubahQty(id, newQty){
  const k = keranjang.find(x=>x.id===id);
  if(!k) return;
  // cari produk asli untuk cek stok
  const p = produk.find(x=>x.id===id);
  // karena stok di produk sudah dikurangi saat ditambahkan, kita need to restore old qty then apply new
  const oldQty = k.qty;
  const available = p ? p.stok + oldQty : oldQty; // p.stok is remaining after previous operations
  if(newQty > available){ alert('Stok tidak mencukupi'); renderCart(); return; }

  // restore stok then reduce by newQty
  if(p) p.stok = available - newQty;
  k.qty = newQty; k.subtotal = k.qty * k.harga;
  renderCart(); loadProdukList(); loadProdukSelect();
}

function hapusDariKeranjang(id){
  const idx = keranjang.findIndex(k=>k.id===id); if(idx===-1) return;
  const k = keranjang[idx];
  // kembalikan stok
  const p = produk.find(x=>x.id===id); if(p) p.stok += k.qty;
  keranjang.splice(idx,1);
  renderCart(); loadProdukList(); loadProdukSelect();
}

function updateTotal(){
  const total = keranjang.reduce((s,i)=>s+i.subtotal,0);
  $('#totalText').textContent = `Total: Rp ${formatRupiah(total)}`;
}

function clearCart(){
  // kembalikan stok
  keranjang.forEach(k=>{ const p = produk.find(x=>x.id===k.id); if(p) p.stok += k.qty; });
  keranjang = [];
  renderCart(); loadProdukList(); loadProdukSelect();
}

function checkout(){
  if(keranjang.length===0) return alert('Keranjang kosong');
  const total = keranjang.reduce((s,i)=>s+i.subtotal,0);
  alert(`Terima kasih. Total yang harus dibayar: Rp ${formatRupiah(total)}`);
  // setelah bayar, kosongkan keranjang
  keranjang = [];
  renderCart(); loadProdukList(); loadProdukSelect();
}

window.onload = function(){
  loadProdukList(); loadProdukSelect();
  $('#addBtn').onclick = tambahKeKeranjang;
  $('#checkoutBtn').onclick = checkout;
  $('#clearBtn').onclick = clearCart;
};
