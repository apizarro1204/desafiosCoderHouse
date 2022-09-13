const express = require("express"),
app = express(),
PORT = process.env.PORT || 8080,
routes = require("./routes/index.js");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas
app.use('/api/productos', routes);

// Public
app.get('/api', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// Server
app.listen(PORT, () => { console.log(`servidor iniciado ${PORT}`);
});


