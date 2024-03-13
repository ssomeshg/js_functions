

var amazon = new Promise(
    function(resolve){
        setTimeout(
            function(){
                console.log("delivered")
            },
         5000)

    }
)



 async function waiting(){
    var data = await amazon    
}
waiting()