var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('assert');
const fizz_buzz = require('../../../lib/solutions/FIZ/fizz_buzz');

describe('FIZZ challenge: basic operation', function() {
	it('for 3, it should return fizz', function() {
	    assert.equal(fizz_buzz(3), 'fizz');
	});
});