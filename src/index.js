const arraySort = array => array.sort((a, b) => a - b);
const itemsSum = array => array.reduce((acc, item) => acc + item, 0);

exports.min = function min(array) {
  if (!array) {
    return 0;
  }
  return ((array.length > 0) ? arraySort(array)[0] : 0);
}

exports.max = function max(array) {
  if (!array) {
    return 0;
  }
  return ((array.length > 0) ? arraySort(array)[array.length - 1] : 0);;
}

exports.avg = function avg(array) {
  if (!array) {
    return 0;
  }
  return ((array.length > 0) ? itemsSum(array) / array.length : 0);
}
