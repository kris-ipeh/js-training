'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = function(string) {
  return string.slice(0,2)
}

const keepLast = function(string) {
  return string.slice(-2)
}

const keepFirstLast = function(string) {
  return string.slice(2,4)
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst('You must write your own tests'), 'Yo')
assert.strictEqual(keepLast('You must write your own tests'), 'ts')
assert.strictEqual(keepFirstLast('You must write your own tests'), 'u ')
// End of tests */
