const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let resArr = arr.flatMap((value, index, array) => {
    if ((array[index - 1] === '--double-next') && (array[index + 1] === '--discard-prev')) return [value]
    if (array[index - 1] === '--discard-next') return [];
    if (array[index + 1] === '--discard-prev') return [];
    if ((array[index - 1] === '--double-next') && (array[index + 1] === '--double-prev')) return [value, value, value]
    if (array[index - 1] === '--double-next') return [value, value];
    if (array[index + 1] === '--double-prev') return [value, value];

    if (value.toString().startsWith('--d')) return [];

    return value
  })

  return resArr
}

module.exports = {
  transform
};
