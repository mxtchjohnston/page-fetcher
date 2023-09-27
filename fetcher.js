const fs = require('fs');
const request = require('request');

let [ url, path ] = process.argv.slice(2);

if (!url) url = "https://www.example.edu";
if (!path) path = './index.html';

request(url, (err, resp, body) => {
  if (err) { 
    console.log(err); 
    return;
  }

  fs.writeFile(path, body, 'utf8', err => {
    if (err) console.log(err);
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});