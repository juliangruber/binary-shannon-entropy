module.exports = shannon;

function shannon(buf){
  var H = 0;
  var count = buf.length;

  var keys = [];
  var C = {};
  for (var i = 0; i < count; i++) {
    if (keys.indexOf(buf[i]) == -1) {
      keys.push(buf[i]);
      C[buf[i]] = 1;
    } else {
      C[buf[i]]++;
    }
  }

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

