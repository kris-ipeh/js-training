'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

const cutFirst = function(string) {
  return string.slice(2)
}

const cutLast = function(string) {
  return string.slice(0, -2)
}

const cutFirstLast = function(string) {
  let first = cutFirst(string)
  let last = cutLast(first)
  return last
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst('You must write your own tests'), 'u must write your own tests')
assert.strictEqual(cutLast('You must write your own tests'), 'You must write your own tes')
assert.strictEqual(cutFirstLast('You must write your own tests'), 'u must write your own tes')
// End of tests */
