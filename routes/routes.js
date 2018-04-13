const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/comingSoon', controller.renderComingSoon);

module.exports = router;