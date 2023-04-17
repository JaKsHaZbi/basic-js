const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = []
  let counter = 1

  str.split('').forEach((el, i, arr) => {
    if (el === arr[i + 1]) {
      counter += 1
    } else {
      counter > 1 ? res.push(`${counter}${el}`) : res.push(el)
      counter = 1
    }
  })
  return res.join('');
}

module.exports = {
  encodeLine
};
