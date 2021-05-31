var isWeekday = require('../isWeekday');
let assert = require("assert");
describe('test my isWeekday function' , function(){
    it("it should return 'isWeekday' when called with 'isWeekday' " , function(){
        assert.equal(true, isWeekday("Monday"));
    })
    it("it should return 'isWeekday' when called with 'isWeekday' " , function(){
        assert.equal(true, isWeekday("Tuesday"));
    })
})