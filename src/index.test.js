var expect = require('chai').expect;
var starWars = require('./index');


describe('frantzyy-starWars-names', function() {

	it('test framework should work!', function() {
		expect(true).to.be.true;
	});

	describe('all', function() {

		it('should be an array of strings!', function() {
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string'
				});
			}
		});
	});

	describe('random', function() {

		it('should return a random name from our list', function() {
			
			var randomItem = starWars.random();
			expect(starWars.all).to.include(randomItem);

		});
	});
});