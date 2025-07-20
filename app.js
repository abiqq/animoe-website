const express = require('express');
const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Route untuk API HiAnime
app.get('/api/v2/hianime/home', (req, res) => {
  res.json({
    trending: [],
    latest_episodes: [],
    popular: []
  });
});

app.get('/api/v2/hianime/azlist/all', (req, res) => {
  const page = req.query.page || 1;
  res.json({
    page: page,
    anime_list: []
  });
});

app.get('/api/v2/hianime/schedule', (req, res) => {
  const date = req.query.date;
  res.json({
    date: date,
    schedule: []
  });
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});