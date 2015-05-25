var express = require('express'),
app = express();
app
.use(express.static('./'))
.get('*',function(req,res){
  res.sendfile('app/index.html');
}).listen(3000);