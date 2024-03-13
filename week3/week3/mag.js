
function magical(a){
    if (a == 0){
        console.log("thats neither even nor odd ,its just zero!!")
    }
    else if(a%2 == 0){
        console.log("its an even number")
    }
    else if (a%2 != 0){
        console.log("its an odd number")
    }
   
    return a;
}
var result = magical(10)
console.log(result)