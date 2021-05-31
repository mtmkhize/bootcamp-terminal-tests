var regCheck = require('../regCheck');
let assert = require("assert");
describe('test my regCheck function' , function(){
    it("it should return 'regCheck' when called with 'regCheck' " , function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));
        console.log(regCheck('DV 23 NB GP', 'GP'));
console.log(regCheck('DV 23 LP GP', 'MP'));
console.log(regCheck('DV 23 LP GP', 'MP'));
console.log(regCheck('CY 189-012', 'ND'));
    })
})