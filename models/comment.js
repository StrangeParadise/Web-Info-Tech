var mongoose = require('mongoose');

var commentSchema = mongoose.Schema(
    {
        "comment":String
    }
);

mongoose.model('Comment', commentSchema);