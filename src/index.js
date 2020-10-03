
exports.min = function min (array) {
  if (Array.isArray(array) && array.length !== 0) {
    return Math.min.apply(null, array);
  } else return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length !== 0) {
    return Math.max.apply(null, array);
  } else return 0;
}

exports.avg = function avg (array) {
  try {
    let sum = array.reduce((param, item) => param + item);
    return sum / array.length;
  } catch (e) {
    return 0;
  }
}
