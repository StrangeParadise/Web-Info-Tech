const express = require('express');
const app = express();

const router = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){ });
console.log(`Express listening on port ${PORT}`);