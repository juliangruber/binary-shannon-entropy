module.exports = shannon;

function shannon(buf, start, end){
  var H = 0;
  start = start || 0;
  end = end || buf.length;
  var count = end - start;
  var keys = [];
  var C = [];
  var val;

  for (var i = start; i < end; i++) {
    val = buf[i];
    if (keys.indexOf(val) == -1) {
      keys.push(val);
      C[val] = 1;
    } else {
      C[val]++;
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

