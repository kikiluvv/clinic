const express = require('express');
const app = express();


/* Set up EJS views */
app.get('/', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/booking', function(req, res) {
    res.render('booking');
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}`);
});