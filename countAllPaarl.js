module.exports = function countAllPaarl(str){
    var total = [];
    //split the comma seperated string
    var reg= str.split(",")
    //using for loop to loop over the elements inside the array and finds
    for (var i=0; i<reg.length;i++){
      var regNum= reg[i].trim();
      if(regNum.includes("CJ")){//console.log(regNum)
        total.push(regNum);
      }
    }
    return total
  }
  