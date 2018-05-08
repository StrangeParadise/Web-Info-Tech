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

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Express listening on port ${port}`);
});





