// request is Node package for sending requests to server
var request = require("request"),
	helloWorld = require("../server.js"),
	base_url = "http://localhost:3000/";

// what Jasmine is testing
describe("Hello World Test", function() {
	
	describe("GET /", function() {

		// tests if response statusCode is "200"
		it("returns status code 200", function(done) {			
			request.get(base_url, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});

		// tests if body is equal to "Hello World"
		it("returns Hello World", function(done) {
			request.get(base_url, function(error, response, body) {
				expect(body).toBe("Hello World");
				helloWorld.closeServer();
				done();
			});
		});

	});
});