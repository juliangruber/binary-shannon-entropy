var calc = require('./');
var randomBuffer = require('random-buffer');

var b = randomBuffer(10 * 1024 * 1024);
var lines = Math.ceil(b.length / 16);

var start = new Date;

for (var i = 0; i < lines; i++) {
  var offset = i * 16;
  var entropy = calc(b, offset, offset + 16);
}

console.log('%sms', (new Date) - start);
