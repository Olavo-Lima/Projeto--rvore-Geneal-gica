const express = require('express');
const routers = express.Router();

const PictureController = require('../controllers/pictureController.js');

const upload = require("../config/multer.js");

routers.post('/', upload.single('file'), PictureController.create);
routers.get('/', PictureController.findAll);
routers.delete('/:id', PictureController.remove);

module.exports = routers;
