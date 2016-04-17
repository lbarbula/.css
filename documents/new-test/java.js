var fs = require('fs');
var c = process.argv[2];
function aOne(callback) {
fs.readFile(c, 'utf8', function st(err, fileContents) {
var bar = fileContents.split('\n');
callback(bar);
  });
}
function logMyNumber(fileContents) {
console.log(fileContents.length -1);
}
aOne(logMyNumber);
