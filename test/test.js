var multiply2 = require('../multipleBy2.js').multiply2;
var expect = require('chai').expect;

describe('mutiply2 ', function() {

  it('should mutiply2', function() {
  	
  	expect(multiply2(6)).to.equal(4);
  });
});

