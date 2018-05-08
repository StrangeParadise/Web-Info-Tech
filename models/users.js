var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "firstName": String,
        "lastName": String,
        "gender": String,
        "dob": Date
    }
);
mongoose.model('Users', userSchema);