'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = function(string) {
  return string.toUpperCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('You must write your own tests'),'YOU MUST WRITE YOUR OWN TESTS')
// End of tests */
