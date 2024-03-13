function chocolate(){
    console.log("this is chocolate")
}

function shop(chocolate){
    console.log("this is shop") //=> executre firsy then call back the 
    //second function

    chocolate()
}


shop(chocolate) 

// async method'


function one(){
    console.log("hello one")
}
setTimeout(one,4000) //(one(function), 4000 is a seconds to execute)


function hello(){
    console.log("Hello")
}

setTimeout(function thanks(){
    console.log("Thanks for waiting")
},5000)

function welcome(){
    console.log("Welcome to js program")
}
hello()

welcome()