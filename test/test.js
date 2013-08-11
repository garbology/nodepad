var should = require('should');
var rest = require('restler');

var server = 'http://localhost:3000';

describe('GET /', function() {
  it('should display homepage', function(done) {
    rest.get(server + '/').on('complete', function(result, response){
      response.statusCode.should.equal(200);
      response.headers.should.include({ 'content-type': 'text/html; charset=utf-8' });
      result.should.include('<title>Express</title>');      
      result.should.include('Welcome to Express');      
      done();
    });    
  });
});

