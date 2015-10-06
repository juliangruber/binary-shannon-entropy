var calc = require('./');

var b = Buffer(15 * 1024 * 1024);
b.fill('a');
var lines = Math.ceil(b.length / 16);

var start = new Date;

for (var i = 0; i < lines; i++) {
  var offset = i * 16;
  var entropy = calc(b.slice(offset, offset + 16));
}

console.log('%sms', (new Date) - start);
