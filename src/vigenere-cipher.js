const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    let result = [],
      keyCounter = 0
    for (let i = 0; i < message.length; i++) {
      const charPos = this.alphabet.indexOf(message[i]),
        keyPos = this.alphabet.indexOf(key[keyCounter % key.length])
      if (charPos !== -1) {
        result.push(this.alphabet[(charPos + keyPos) % 26])
        keyCounter++
      } else {
        result.push(message[i])
      }
    }
    return this.type ? result.join('') : result.reverse().join('')
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!')
    message = message.toUpperCase()
    key = key.toUpperCase()
    let result = [],
      keyCounter = 0
    for (let i = 0; i < message.length; i++) {
      const charPos = this.alphabet.indexOf(message[i]),
        keyPos = this.alphabet.indexOf(key[keyCounter % key.length])
      if (charPos !== -1) {
        result.push(this.alphabet[(charPos - keyPos + 26) % 26])
        keyCounter++
      } else {
        result.push(message[i])
      }
    }
    return this.type ? result.join('') : result.reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
