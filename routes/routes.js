const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.renderIndex);
router.get('/comingSoon', controller.renderComingSoon);
router.get('/login&register', controller.renderLoginRegister);
router.post('/login&register', controller.login);
router.post('/homepage',controller.register);
router.get('/homepage:name', controller.renderHomepage);
router.get('/profile', controller.renderProfile);
router.get('/experience:name', controller.renderExperience);
router.post('/experience:name', controller.updateExperience);
router.get('/friends/:name', controller.renderFriends);
router.get('/settings', controller.renderSettings);
router.get('/settingsAccount', controller.renderSettingsAccount);
router.get('/settingsPrivacy', controller.renderSettingsPrivacy);
router.get('/settingsBlockedUsers', controller.renderSettingsBlockedUsers);
router.get('/familyTree', controller.renderFamilyTree);
router.get('/shares:name', controller.renderShares);
router.post('/shares:name', controller.addShares);
router.get('/wishes:name', controller.renderWishes);
router.get('/latestWishes:name', controller.renderLatestWishes);
router.get('/wishEdit:name', controller.renderWishesEdit);
router.post('/wishEdit:name', controller.updateWishes);
router.get('/remember', controller.renderRemember);


// DB part
router.get('/api',controller.findAllUsers);
router.post('/api',controller.createUser);
router.get('/api/:name',controller.findOneUser);

module.exports = router;


