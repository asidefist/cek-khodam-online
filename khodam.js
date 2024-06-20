const khodamList = [
    "khodam macan putih",
    "khodam macan kumbang",
    "khodam macan sedan",
    "khodam naga",
    "khodam Jin Qorin",
    "khodam Buaya Putih",
    "khodam Buaya darat",
];

// Fungsi Untuk Memilih Khodam Secara Acak
function pilihKhodam(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; // menghapus hasil sebelumnya

    if (nama) {
        const randomIndex = Math.floor(Math.random() * khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = `Nama Anda adalah ${nama} dan khodam pilihan Anda adalah ${khodamTerpilih}`;

        // menghapus hasil setelah 11 detik (11000)
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 11000);
    } else {
        resultDiv.textContent = "Nama tidak boleh kosong.";
    }
}

document.getElementById("khodamForm").addEventListener("submit", pilihKhodam);