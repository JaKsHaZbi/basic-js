const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resObj = {};
  domains.forEach(el => {
    let wordsArray = el.split('.').reverse()
    let str = ''
    wordsArray.forEach(el2 => {
      str += `.${el2}`;
      !resObj[str] ? resObj[str] = 1 : resObj[str]++;
    })
  })
  return resObj;
}

module.exports = {
  getDNSStats
};
