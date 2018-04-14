const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.renderIndex);
router.get('/comingSoon', controller.renderComingSoon);

module.exports = router;