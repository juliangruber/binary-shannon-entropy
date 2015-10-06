module.exports = shannon;

function shannon(buf){
  var H = 0;
  var count = buf.length;

  var C = {};
  for (var i = 0; i < count; i++) {
    C[buf[i]] = (C[buf[i]] || 0) + 1;
  }
  var keys = Object.keys(C);

  for (var i = 0; i < keys.length; i++) {
    var Pi = C[keys[i]] / count;
    H += Pi * log2(Pi);
  }

  return -H;
}

var logs = {};

function log2(x){
  return logs[x] = logs[x] || (Math.log(x) / Math.LN2);
}

