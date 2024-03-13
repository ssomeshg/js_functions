// dom manipulation

// var head = document.getElementById("title")
// head.textContent = "Bye World"



// ex 1

// var paraGraph2 = document.querySelector('.para2')
// console.log(paraGraph2.textContent)

// var p3 = document.querySelector('.para3')
// p3.textContent = "updated text sontent"



var inNumber = document.querySelector('#inum');
var resultIs = document.getElementById('result_r')
var guessNum = document.getElementById('guesscount')
var numOfguess = 3

var randomNum = Math.floor(Math.random()*10)+1
if(randomNum>5){
    randomNum = randomNum-5
}


function checkBtn(){

    if(inNumber.value == randomNum){
        console.log(inNumber)
        alert("your guess is right")
        resultIs.textContent = "Your Guess is right✅✔️"

    }
    else{
        numOfguess = numOfguess-1
        if(numOfguess == 0){
            alert("your lost , Generated Number is" +randomNum)
              
        }
        guessNum.textContent = "Avaialble guess is" +numOfguess;
        resultIs.textContent = "Your Guess is Wrong❌👎🏻"
    }
    
}


