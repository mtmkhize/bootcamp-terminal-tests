var isFromBellville = require('../isFromBellville');
let assert = require("assert");
describe('test my isFrom function' , function(){
    it("it should return 'Bellville' when called with 'Bellville' " , function(){
        assert.equal(true, isFromBellville("CY 874324, CJ 123"));
    })
})