var countAllPaarl = require('../countAllPaarl');
let assert = require("assert");

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

var regNumbersForPaarl = countAllPaarl(regNumbers);

describe('test my countAllPaarl function' , function(){
    it("it should return 'Paarl' when called with 'Paarl' " , function(){
        
assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
assert.equal('CJ 678 543', regNumbersForPaarl[0]);
assert.equal('CJ 67890', regNumbersForPaarl[1]);

})
})
