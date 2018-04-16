const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.renderIndex);
router.get('/comingSoon', controller.renderComingSoon);
router.get('/login&register', controller.renderLoginRegister);
router.get('/homepage', controller.renderHomepage);
router.get('/profile', controller.renderProfile);
router.get('/experience', controller.renderExperience);
router.get('/friends', controller.renderFriends);
router.get('/zoranHomepage', controller.renderZoranHomepage);
router.get('/settings', controller.renderSettings);



module.exports = router;