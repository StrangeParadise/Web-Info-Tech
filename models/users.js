var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
    {
        "email": String,
        "userName": String,
        "password": String,
        "firstName": String,
        "lastName": String,
        "gender": String,
        "dob": String,
        "experience":{content:String, time:Date},
        "share":[{title: String,content: String, time:Date}],
        "wish":{content:String, like:Number, time:Date}
    }
);
mongoose.model('users', userSchema);