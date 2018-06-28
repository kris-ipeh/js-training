'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 const whisper = function(string) {
  return '*' + string.toLowerCase() + '*'
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('You must write your own tests'), '*you must write your own tests*')
// End of tests */
