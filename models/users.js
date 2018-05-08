var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "gender": String,
    }
);
mongoose.model('users', userSchema);