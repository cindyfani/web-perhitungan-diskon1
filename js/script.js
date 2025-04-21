// bagian tampilan pertama apk dijalankan
    document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fbarang").style.display = 'block'; //muncul
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
})

// bagian hitung diskon
function hitungDiskon() {
    let namaBarang = document.getElementById('namaBarang').value;
    let harga = document.getElementById('harga').value;
    let diskon = document.getElementById('diskon').value;

    let nilaiDiskon, totalHarga;

    //kondisi salah
    let errors = [];
    
    if (!namaBarang.trim()) {
        errors.push("Nama barang harus diisi!");
    }
    if (!harga.trim()) {
         errors.push("Harga tidak boleh kosong");
        } 
        else if (isNaN(harga) || harga <= 0) {
            errors.push("Harga harus berupa angka dan lebih dari 0");
        }
        if (!diskon.trim()) {
            errors.push("Diskon tidak boleh kosong");
        }
         else if (isNaN(diskon) || diskon < 0 || diskon > 100) {
            errors.push("Diskon harus berupa angka antara 0 - 100");
        }
        if (errors.length > 0) {
             alert(errors.join("\n"));
             return;
            }

// lanjutkan proses jika semua valid

    //rumus hitung diskon
    nilaiDiskon = harga * (diskon/100);
    totalHarga  = harga - nilaiDiskon;

   
    //tampilkan data
    document.getElementById('hasil_nama_barang').textContent = namaBarang;  
    document.getElementById('hasil_diskon').textContent = nilaiDiskon.toFixed(2); 
    document.getElementById('hasil_total_harga').textContent = totalHarga.toFixed(2); 

    document.getElementById("fbarang").style.display = 'none'; //sembunyi
    document.getElementById("tampil_data").style.display = 'block'; //muncul

}

//bagian fungsi tombol kembali
function kembali(){
    document.getElementById("fbarang").style.display = 'block'; //muncul
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
}

//bagian fungsi tombol bersih
function bersih() {
    document.getElementById('namaBarang').value = '';
    document.getElementById('harga').value = '';
    document.getElementById('diskon').value = '';
}
