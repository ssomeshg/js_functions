

function random(guessedNumber){
    var randomNumber = (Math.floor(Math.random()*10)+1)

        if(randomNumber == guessedNumber){
            console.log("won the game")
        }
        else{
            console.log("you are loser and random number is " +randomNumber)
        }


}
var guessedNumber = 7
random(guessedNumber)