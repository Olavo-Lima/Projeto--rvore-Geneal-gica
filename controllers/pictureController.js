const Picture = require('../models/pictures.js');
const fs = require('fs');

exports.create = async (req, res) => {
    try {
      const { name } = req.body;
  
      const file = req.file;
      const picture = new Picture({
        name,
        src: file.path,
      });
  
      await picture.save();
      res.json(picture);
    } catch (err) {
      if (status(404)) {
        res.status(404).json({ message: "Diretório não encontrado"})
      } else {
        res.status(500).json({ message: "Erro ao salvar a imagem." });
      }
    }
  };

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find();

        res.json(pictures);

    } catch (error) {
        res.status(500).json({message: "Erro ao buscar imagens."});
    }
};

exports.remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);

    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
        if(!picture) {
            return res.status(500).json({message: "Imagem não encontrada!"});
        }

    fs.unlinkSync(picture.src);

    await picture.remove();

        res.json({message: "Imagem removida com sucesso!"});

    } catch (error) {
        console.error(error); 
        res.status(500).json({message: "Erro ao excluir a imagem."});
    }
}    

