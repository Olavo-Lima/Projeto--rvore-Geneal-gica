const express = require('express')
const multer = require('multer')
const app = express()
const upload = multer({ dest: 'uploads/' })

app.post('/upload', upload.single('imagem'), (request, response) => {

    const imagem = req.file

    response.send('Imagem enviada com sucesso')
})

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000')
})