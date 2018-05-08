var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "email": String,
        "userName": String,
        "password": String,
        "firstName": String,
        "lastName": String,
        "gender": String,
        "dob": String
    }
);
mongoose.model('users', userSchema);