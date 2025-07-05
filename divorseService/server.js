// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // для JSON
app.use(bodyParser.urlencoded({ extended: true })); // для form-urlencoded

// Приём POST-запроса с формы
app.post('/submit-alimony', (req, res) => {
  console.log('Получены данные формы:', req.body);
  res.json({ success: true, message: 'Данные получены успешно!' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
