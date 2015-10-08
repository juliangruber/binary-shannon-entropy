module.exports = shannon;

function shannon(buf, start, end){
  var H = 0;
  start = start || 0;
  end = end || buf.length;
  var onebycount = 1 / (end - start);
  var keys = [];
  var C = {};
  var val;

  for (var i = start; i < end; i++) {
    val = buf[i];
    if (typeof C[val] == 'undefined') {
      keys.push(val);
      C[val] = onebycount;
    } else {
      C[val] += onebycount;
    }
  }

  for (var i = 0; i < keys.length; i++) {
    H += C[keys[i]] * Math.log(C[keys[i]]);
  }

  return -H / Math.LN2;
}
