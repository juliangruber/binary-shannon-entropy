
# binary-shannon-entropy

  Calculate the [shannon entropy](https://en.wikipedia.org/wiki/Entropy_(information_theory)) of a buffer.

  [![build status](https://secure.travis-ci.org/juliangruber/binary-shannon-entropy.svg)](http://travis-ci.org/juliangruber/binary-shannon-entropy)

## Example

```js
var calc = require('binary-shannon-entropy');

calc(Buffer('aaaaa'));  // => 0
calc(Buffer('fffff'));  // => 0
calc(Buffer('aafaa'));  // => 0.7219280948873623
calc(Buffer('abcdef')); // => 2.584962500721156
```

## Installation

```bash
$ npm install binary-shannon-entropy
```

## API

### calc(buf[, start][, end])

  Return a number between `0` and `8`, giving the Shannon entropy to the base of 2.

  Optionally limit the area in the buffer to inspect by `start` and `end`.

## Algorithm

```
H = -Sum(P_i * log2(P_i))
```

## License

  MIT

