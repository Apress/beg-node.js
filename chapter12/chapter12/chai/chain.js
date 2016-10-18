var expect = require('chai').expect;
var assert = require('chai').assert;

// Some variable to assert on
var beverages = { tea: ['chai', 'matcha', 'oolong'] };

// assert
assert.lengthOf(beverages.tea, 3);
// BDD 
expect(beverages).to.have.property('tea').with.length(3);
// same as 
expect(beverages).property('tea').length(3);
