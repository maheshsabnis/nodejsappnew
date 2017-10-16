var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.set('node_modules',__dirname+'/node_modules');


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.get('*', function(req, res){
    res.render('home.html');
});

app.listen(app.get('port'), function() {
    console.log('started');
});