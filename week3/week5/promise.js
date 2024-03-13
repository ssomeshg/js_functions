
var amazon = new Promise(
    function(resolve,reject){
        var delivered = false

        if(delivered == true){
           resolve("Order deliverd Sucess fully , you can pay amount")
        }
        else{
            reject("order didnt deliverd , you can raise complaint")
        }
    }
)

// amazon.then(
//     function(){
//         console.log("succesfully")
//     }
// ).catch(
//     function(){
//         console.log("rejected")
//     }
// ) or another methiod


amazon.then(
    function(Sucessmsg){
        console.log(Sucessmsg)
    }
).catch(
    function(errormsg){
        console.log(errormsg)
    }
)