const express = require('express');
const router = express.Router();

const videoController = require('../controllers/video');
//Fetch video by id
router.post('/', videoController.getVideos);

module.exports = router;
