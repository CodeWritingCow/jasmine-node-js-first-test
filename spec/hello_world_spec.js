// request is Node package for sending requests to server
var request = require("request"),
	base_url = "http://localhost:3000/";

// what Jasmine is testing
describe("Hello World Test", function() {
	
	describe("GET /", function() {

		// what successful test should return
		it("returns status code 200", function() {
			
			// request makes call to localhost:3000
			request.get(base_url, function(error, response, body) {
				
				// the test itself, checks if response statusCode is "200"
				expect(response.statusCode).toBe(200);
				done();
			});
		});

	});
});