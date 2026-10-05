const pesananForm = document.getElementById("pesananForm");
pesananForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const nama = document.getElementById("namaPemesan").value;
    const telepon = document.getElementById("teleponPemesan").value;
    const catatan = document.getElementById("catatanPesanan").value;
    alert(
        "Pesanan berhasil dikonfirmasi!\n\n" +
        "Nama: " + nama + "\n" +
        "Nomor Telepon: " + telepon + "\n" +
        "Catatan: " + catatan + "\n\n" +
        "Terima kasih, " + nama + "!"
    );
});