
var num = [1,2,3,4,5,6]


var evennum = num.filter(
    function(data){
        if(data%2 == 0){
            return true
        }
    
        else{
            return false
        }
    }
)
console.log(evennum)


// find greater than 50 numbers


var number = [10,65,74,21,45,35,17,85]

var grater = number.filter(
    function(el){
        if(el >50){
            return true;
        }
        else{
            return false
        }
    }
)
console.log(grater)