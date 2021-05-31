
var countAllFromTown = require('../countAllFromTown');
let assert = require("assert");

var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
describe('test my countAllTown function' , function(){
    it("it should return 'Town' when called with 'Town' " , function(){
assert.equal(fromStellies, 3)

})
})