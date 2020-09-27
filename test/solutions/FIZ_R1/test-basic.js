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

describe('FIZZ DELUXE challenge: basic operation', function() {
	it('for 333, it should return fizz fake deluxe', function() {
	    assert.equal(fizz_buzz(333), 'fizz fake deluxe');
	});
});

describe('FIZZ DELUXE challenge: basic operation', function() {
	it('for 222, it should return fizz deluxe', function() {
	    assert.equal(fizz_buzz(222), 'fizz deluxe');
	});
});

describe('FIZZ DELUXE challenge: basic operation', function() {
	it('for 5555, it should return buzz deluxe', function() {
	    assert.equal(fizz_buzz(5555), 'buzz fake deluxe');
	});
});

describe('FIZZ DELUXE challenge: basic operation', function() {
	it('for 555, it should return fizz buzz fake deluxe', function() {
	    assert.equal(fizz_buzz(555), 'fizz buzz fake deluxe');
	});
});

describe('FIZZ DELUXE challenge: basic operation', function() {
	it('for 4444, it should return deluxe', function() {
	    assert.equal(fizz_buzz(4444), 'deluxe');
	});
});


