const express = require('express')
const app = express()

require('dotenv').config();
require('./db.js')

const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/picture.js');

app.use('/picture', pictureRouter)

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
})