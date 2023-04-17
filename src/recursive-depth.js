const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0
    let maxDepth = 1
    arr.forEach(el => {
      let curDepth = 1
      if (Array.isArray(el)) {
        curDepth += this.calculateDepth(el)
      }
      maxDepth = Math.max(maxDepth, curDepth)
    })
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
