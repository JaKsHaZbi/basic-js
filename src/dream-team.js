const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  let arrFirstLetters = []

  if (Array.isArray(members)) {
    members.forEach(item => findFirstLetter(item))
  }
  
  return arrFirstLetters.sort().join('')

  function findFirstLetter (el) {
    if (typeof(el) == 'string') {
      let newEl =  el.replace(/\s/g, "")
        if (typeof(newEl[0]) == 'string') {
            arrFirstLetters.push(newEl[0].toUpperCase())
        } 
    } else return false
  }
}

module.exports = {
  createDreamTeam
};
