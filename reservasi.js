const form = document.getElementById("reservasiForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const tanggal = document.getElementById("tanggal").value;
    const waktu = document.getElementById("waktu").value;
    const jumlah = document.getElementById("jumlah").value;
    alert(
        "Reservasi berhasil dibuat!\n\n" +
        "Nama: " + nama + "\n" +
        "Nomor Telepon: " + telepon + "\n" +
        "Tanggal: " + tanggal + "\n" +
        "Waktu: " + waktu + "\n" +
        "Jumlah tamu: " + jumlah
    );
    form.reset();
});