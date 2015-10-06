var calc = require('./');
var test = require('tape');

test('shannon entropy', function(t){
  t.equal(round(calc(Buffer('aaaaa'))), 0);
  t.equal(round(calc(Buffer('aafaa'))), 0.72);
  t.equal(round(calc(Buffer('abcdef'))), 2.58);
  t.equal(round(calc(Buffer('abcdeabcdefj'))), 2.75);
  t.equal(round(calc(Buffer('abcddd'), 3)), 0);
  t.equal(round(calc(Buffer('aaabcd'), 0, 3)), 0);
  t.equal(round(calc(Buffer('abcccbce'), 2, 5)), 0);
  t.end();
});

function round(x){
  return Math.round(x * 100) / 100;
}
