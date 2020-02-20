
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;
    return array.reduce((min, num ) => (num < min) ? num : min , 0)
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;
    
    return array.reduce((max, num ) => (num > max) ? num : max , 0)
    
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;
    return array.reduce((sum, num) => sum + num, 0) / array.length;
  }
