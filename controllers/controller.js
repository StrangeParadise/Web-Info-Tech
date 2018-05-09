require('../models/users.js');
require('../models/comment.js');
require('../models/epitaph.js');
var mongoose = require('mongoose');
var User = mongoose.model('users');
var Comment = mongoose.model('Comment');
var Epitaph = mongoose.model('Epitaph');

module.exports.renderIndex = function (req, res) {
    res.render('index');
}
module.exports.renderComingSoon = function (req, res) {
    res.render('comingSoon');
}
module.exports.renderLoginRegister = function (req, res) {
    res.render('loginRegister');
}
module.exports.renderHomepage = function (req, res) {
    res.render('homepage');
}
module.exports.renderProfile = function (req, res) {
    res.render('profile');
}
module.exports.renderExperience = function (req, res) {
    res.render('experience');
}
module.exports.renderFriends = function (req, res) {
    res.render('friends');
}
module.exports.renderZoranHomepage = function (req, res) {
    res.render('zoranHomepage');
}
module.exports.renderSettings = function (req, res) {
    res.render('settings');
}
module.exports.renderSettingsAccount = function (req, res) {
    res.render('settingsAccount');
}
module.exports.renderSettingsPrivacy = function (req, res) {
    res.render('settingsPrivacy');
}
module.exports.renderSettingsBlockedUsers = function (req, res) {
    res.render('settingsBlockedUsers');
}
module.exports.renderFamilyTree = function (req, res) {
    res.render('familyTree');
}
module.exports.renderShares = function (req, res) {
    res.render('shares');
}
module.exports.renderWishes = function (req, res) {
    res.render('wishes');
}
module.exports.renderLatestWishes = function (req, res) {
    res.render('latestWishes');
}
module.exports.renderWishesEdit = function (req, res) {
    res.render('wishesEdit');
}
module.exports.renderRemember = function (req, res) {
    Comment.find({}, function(err, docs){
        if(!err){
            res.render('remember', {comment:docs});
        }
        else{
            res.sendStatus(404);
        }
    });
}


var createUser = function(req,res){
    //console.log(req.body.firstName);
    var user = new User({
        "email": req.body.email,
        "userName": req.body.userName,
        "password": req.body.password,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "gender": req.body.gender,
        "dob": req.body.dob
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

var findAllUsers = function(req,res){
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

var findOneUser = function(req,res){
    var userID = req.params.id;
    User.findById(userID,function(err,user){
        if(!err){
            res.send(user);
        }else{
            res.sendStatus(404);
        }
    });
};

var createComment = function(req,res){
    var comment = new Comment(
        {
            "avatar": "/img/47.jpg",
            "comment":req.body.comment,
            "time": (new Date()).toLocaleString()
        }
    );
    comment.save(function(err,newComment)
        {
            if (!err){
                res.send(newComment);
            }
            else{
                res.sendStatus(400)
            }
        }
    );
};

var findComment = function(req,res){
    Comment.find(function(err,comments){
        if(!err){
            res.send(comments);
        }else{
            res.sendStatus(404);
        }
    });
};

var createEpitaph = function(req,res){
    var epitaph = new Epitaph(
        {
            "epitaph":req.body.epitaph,
            "time": (new Date()).toLocaleString()
        }
    );
    epitaph.save(function(err,newEpitaph)
        {
            if (!err){
                res.send(newEpitaph);
            }
            else{
                res.sendStatus(400)
            }
        }
    );
};

module.exports.createUser = createUser;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;

module.exports.createComment = createComment;
module.exports.findComment = findComment;
module.exports.createEpitaph = createEpitaph;