const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.renderIndex);
router.get('/comingSoon', controller.renderComingSoon);
router.get('/login&register', controller.renderLoginRegister);
router.get('/homepage', controller.renderHomepage);


module.exports = router;