var mongoose = require('mongoose');
//var User = mongoose.model('users');
var commentSchema = mongoose.Schema(
    {
        "avatar":String,
        "comment":String,
        "time":String
        //"user": User
    }
);

mongoose.model('Comment', commentSchema);