var express = require('express');

//
var app = express();
app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express server is up on port 3000');
});
/*var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
app.get('/', express.static('public'))
 
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})*/