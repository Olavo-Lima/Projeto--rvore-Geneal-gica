const express = required('express');
const multer = required('multer');
const path = required('path');

const app = express();
const port = 3000;

// Consfiguração para salvar os arquivos na pasta 'uploads'
const storage = multer.diskStorage({
    destinatin: (req, file, cb) => {
        cb(null, './Uploads/');
    },
    fileName: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalName));
    },
});

const upload = multer({ sorage });

app.post('./Uploads/', upload.single('image'), (req, res) => {
    res.send('Imagem enviada com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor está ouvindo na porta ${port}`);
});