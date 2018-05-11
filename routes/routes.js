const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.renderIndex);
router.get('/comingSoon', controller.renderComingSoon);
router.get('/login&register', controller.renderLoginRegister);
router.get('/homepage/:userName', controller.renderHomepage);
router.get('/profile', controller.renderProfile);
router.get('/experience/:userName', controller.renderExperience);
router.post('/experience/:userName', controller.updateExperience);
router.get('/friends/:userName', controller.renderFriends);
router.get('/settings/:userName', controller.renderSettings);
router.get('/settingsAccount/:userName', controller.renderSettingsAccount);
router.get('/settingsPrivacy/:userName', controller.renderSettingsPrivacy);
router.get('/settingsBlockedUsers/:userName', controller.renderSettingsBlockedUsers);
router.get('/familyTree/:userName', controller.renderFamilyTree);
router.get('/shares/:userName', controller.renderShares);
router.post('/shares/:userName', controller.addShares);
router.get('/wishes/:userName', controller.renderWishes);
router.get('/latestWishes/:userName', controller.renderLatestWishes);
router.get('/wishEdit/:userName', controller.renderWishesEdit);
router.post('/wishEdit/:userName', controller.updateWishes);
router.get('/remember/:userName', controller.renderRemember);


// DB part
router.get('/api',controller.findAllUsers);
router.post('/api',controller.createUser);
router.get('/api/:name',controller.findOneUser);

router.get('/api/comment', controller.findComment);
router.post('/remember:name', controller.createComment);

router.post('/api2', controller.createEpitaph);

module.exports = router;


