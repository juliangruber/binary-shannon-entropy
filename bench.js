var calc = require('./');

var b = Buffer(30 * 1024 * 1024);
b.fill('a');
var lines = Math.ceil(b.length / 16);

var dt = 0;

for (var i = 0; i < lines; i++) {
  var offset = i * 16;

  var start = new Date;
  var entropy = calc(b, offset, offset + 16);
  dt += (new Date) - start;
}

console.log('%sms', dt);
