module.exports = shannon;

function shannon(buf){
  var H = 0;
  var count = buf.length;
  var C = makeC(buf);
  var keys = Object.keys(C);

  for (var i = 0; i < keys.length; i++) {
    var Pi = C[keys[i]] / count;
    H += Pi * log2(Pi);
  }

  return -H;
}

function makeC(buf){
  var C = {};
  for (var i = 0; i < buf.length; i++) {
    if (typeof C[buf[i]] == 'undefined') {
      C[buf[i]] = 1;
    } else {
      C[buf[i]]++;
    }
  }
  return C;
}

function log2(x){
  return Math.log(x) / Math.LN2;
}

