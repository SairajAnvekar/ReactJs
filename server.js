var express      = require('express');
var app          = express();

app.set('port', (process.env.PORT || 8000));

app.use(express.static(__dirname + '/public'));
// views is directory for all template files

engines = require('consolidate');
app.engine('html', engines.nunjucks);
//app.engine('ejs', engines.ejs);
app.set('view engine', 'html');
app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.set('views', __dirname + '/dist');
app.use('/dist', express.static(__dirname + '/dist/'));


app.get('/', function(req, res, next) {  
     res.render('index');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});