const express = require('express');
const app = express();
const router = require('./routes/routes');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(router);


// Database setup
require('./models/db.js');

// const PORT = process.env.PORT || 3000;
const PORT = 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});





