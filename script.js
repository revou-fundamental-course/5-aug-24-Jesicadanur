document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    let advice = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        advice = `
            <p>Anda berada dalam kategori Kekurangan Berat Badan.</p>
            <p>Disarankan untuk meningkatkan asupan kalori dan nutrisi. Konsultasikan dengan ahli gizi untuk mendapatkan pola makan yang tepat.</p>
            <button class="btn">Konsultasi Ahli Gizi Via Aplikasi</button>
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal (Ideal)';
        advice = `
            <p>Anda berada dalam kategori berat badan Normal (Ideal).</p>
            <p>Anda memiliki berat badan yang sehat. Pertahankan gaya hidup dan pola makan yang seimbang untuk menjaga kesehatan Anda.</p>
            <button class="btn">Konsultasi Ahli Gizi Via Aplikasi</button>
        `;
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan Berat Badan';
        advice = `
            <p>Anda berada dalam kategori overweight atau berat badan berlebih.</p>
            <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.</p>
            <p>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>
            <button class="btn">Konsultasi Ahli Gizi Via Aplikasi</button>
            <button class="btn">Registrasi Online Ahli Gizi</button>
        `;
    } else {
        category = 'Obesitas';
        advice = `
            <p>Anda berada dalam kategori Obesitas.</p>
            <p>Disarankan untuk segera melakukan upaya penurunan berat badan, termasuk mengubah pola makan dan meningkatkan aktivitas fisik.</p>
            <button class="btn">Konsultasi Ahli Gizi Via Aplikasi</button>
            <button class="btn">Registrasi Online Ahli Gizi</button>
            <p>Beberapa penyakit yang berasal dari obesitas:</p>
            <ul>
                <li>Diabetes</li>
                <li>Hipertensi</li>
                <li>Sakit Jantung</li>
                <li>Osteoarthritis</li>
            </ul>
            <p></p>
            <button class="btn">Konsultasi Dokter Via Aplikasi</button>
            <button class="btn">Registrasi Online Sekarang</button>
        `;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <h3>${category}</h3>
        <p id="bmi-value">${bmi}</p>
        <p>Anda memiliki ${category}</p>
        <p>Jenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}</p>
        <p>Usia: ${age} tahun</p>
        <button class="btn">Download Hasil BMI</button>
        ${advice}
        <p>Download Aplikasi:</p>
        <img src="playstore.png" alt="Google Play Store" class="store-img">
        <img src="appstore.webp" alt="App Store" class="store-img">
    `;
});