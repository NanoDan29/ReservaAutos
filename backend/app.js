require('./config/config')

const express = require('express')
const app = express();
const mongoose = require('mongoose')

const bodyparser = require('body-parser');

// parse application/x-www-form-urlencoded para tomar fomularios html
app.use(bodyparser.urlencoded({ extended: false }))

// parse aplication/json
app.use(bodyparser.json())

app.use(require('./routes/usuario'));



mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});