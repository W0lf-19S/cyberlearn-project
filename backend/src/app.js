const express = require('express');
const app = express();

app.use(express.json());

// Ruta básica de salud
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CyberLearn Backend funcionando' });
});

module.exports = app;
