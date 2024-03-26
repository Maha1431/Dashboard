const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/comment.Controller');

router.get('/', commentController.getComments);

module.exports = router;