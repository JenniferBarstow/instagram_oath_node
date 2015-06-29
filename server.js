require('./.env') 
var fs = require("fs"),
    http = require("http"),
    mongoose = require("mongoose"),
    jade = require('jade'),
    request = require("request"),
    querystring = require('querystring');
    

var handleRequest = function(req, res) {
  console.log(req.url.split("?"));
  if (req.url == '/') {
    // Synchronously load the index jade template (http://jade-lang.com/)
    var index = fs.readFileSync('index.jade', 'utf8');
    // Compile template
    compiledIndex = jade.compile(index, { pretty: true, filename: 'index.jade' });
   // Write rendered contents to response stream
    res.end(compiledIndex());
  } else if (req.url.split("?")[0] == '/callback') {
    var code = req.url.split("?")[1].split("=")[1];
    var requestBody = querystring.stringify({
        'url': 'https://api.instagram.com/oauth/access_token',
        'client_id':'4ca1c5212ebe4dae9d8dca03462c12a9',
        'client_secret': process.env.SECRET,
        'grant_type': 'authorization_code',
        'redirect_uri': 'http://localhost:1337/callback',
        'code': code
      });


console.log(requestBody);
    request.post({
      method: "POST",
      url: 'https://api.instagram.com/oauth/access_token',
      body: requestBody
    }).on('data', function(data){
      console.log(data.toString());
      res.end(data.toString());
    })

    
  } else {
    res.writeHead(200);
    res.end('A new programming journey awaits');
  }
};

var server = http.createServer(handleRequest);
server.listen(1337);
