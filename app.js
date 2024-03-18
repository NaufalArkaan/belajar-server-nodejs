// Import modul Express.js
const express = require('express');

// Inisialisasi aplikasi Express
const app = express();

// Definisikan route utama
app.get('/', (req, res) => {
    res.send('Selamat datang di halaman utama!');
});

// Definisikan route lainnya
app.get('/about', (req, res) => {
    res.send('Ini adalah halaman tentang kami.');
});

// Definisikan route dengan parameter dinamis
app.get('/users/:userId', (req, res) => {
    res.send(`Ini adalah halaman profil pengguna dengan ID ${req.params.userId}`);
});

// Jalankan server pada port tertentu
const port = 3000;
app.listen(port, () => {
    console.log(`Server berjalan pada http://localhost:${port}`);
});