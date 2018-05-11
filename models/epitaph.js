var mongoose = require('mongoose');

var epitaphSchema = mongoose.Schema(
    {
        "epitaph":String,
        "time":String
    }
);

mongoose.model('Epitaph', epitaphSchema);