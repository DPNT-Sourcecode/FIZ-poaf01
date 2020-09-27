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

describe('FIZZ challenge: basic operation', function() {
	it('for 5, it should return buzz', function() {
	    assert.equal(fizz_buzz(5), 'buzz');
	});
});

describe('FIZZ challenge: basic operation', function() {
	it('for 15, it should return fizz buzz', function() {
	    assert.equal(fizz_buzz(15), 'fizz buzz');
	});
});

describe('FIZZ challenge: basic operation', function() {
	it('for 7483, it should return 7483', function() {
	    assert.equal(fizz_buzz(7483), 'fizz');
	});
});

describe('FIZZ challenge: basic operation', function() {
	it('for 7583, it should return fizz buzz', function() {
	    assert.equal(fizz_buzz(7583), 'fizz buzz');
	});
});