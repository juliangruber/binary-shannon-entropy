var calc = require('./');

console.log(calc(Buffer('aaaaa')));
console.log(calc(Buffer('fffff')));
console.log(calc(Buffer('aafaa')));
console.log(calc(Buffer('abcdef')));
console.log(calc(Buffer('abcdeabcdefj')));

