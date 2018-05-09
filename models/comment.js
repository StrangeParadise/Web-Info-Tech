var mongoose = require('mongoose');

var commentSchema = mongoose.Schema(
    {
        "avatar":String,
        "comment":String,
        "time":String
    }
);

mongoose.model('Comment', commentSchema);