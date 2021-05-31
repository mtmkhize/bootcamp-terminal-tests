var fromWhere = require('../fromWhere');
let assert = require("assert");
describe('test my fromWhere function' , function(){
    it("it should return 'Bellville' when called with 'Bellville' " , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
assert.equal(fromWhere('CC'), 'Some other place!');
;
    })
})