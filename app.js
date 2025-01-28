// Importa el módulo express
const express = require('express');
const path = require('path'); // Necesario para servir archivos estáticos

// Crea una instancia de Express
const app = express();

// Configura una ruta para el archivo index.html
app.use(express.static(path.join(__dirname, 'public'))); // archivos estáticosn en carpeta 'public'

// Ruta por defecto
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Sirve el archivo index.html
});

// Configura el puerto en el que escuchará el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
