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
router.get('/settingsAccount', controller.renderSettingsAccount);
router.get('/settingsPrivacy', controller.renderSettingsPrivacy);
router.get('/settingsBlockedUsers', controller.renderSettingsBlockedUsers);
router.get('/familyTree', controller.renderFamilyTree);
router.get('/shares', controller.renderShares);
router.get('/wishes', controller.renderWishes);
router.get('/latestWishes', controller.renderLatestWishes);
router.get('/wishesEdit', controller.renderWishesEdit);
router.get('/remember', controller.renderRemember);


// DB part
router.get('/api',controller.findAllUsers);
router.post('/api',controller.createUser);
router.get('/api/:id',controller.findOneUser);

router.get('/apii', controller.findComment);
router.post('/remember', controller.createComment);

router.post('/api2', controller.createEpitaph);

module.exports = router;


