var countRegNumber = require('../countRegNumber');
let assert = require("assert");
describe('test my countRegNumber function' , function(){
    it("it should return 'regCount' when called with 'regCount' " , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'))
    })
})