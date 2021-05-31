var yearsAgo = require('../yearsAgo');
let assert = require("assert");
describe('test my yearsAgo function' , function(){
    it("it should return 'yearsAgo' when called with 'yearsAgo' " , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))

    })
    it("it should return 'yearsAgo' when called with 'yearsAgo' " , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));;
    })
})