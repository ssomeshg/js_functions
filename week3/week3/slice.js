var a=[1,2,3,4,5]
var b = a.slice(0,3)
console.log(b)

// remove particular element in array

// splice


var a=[1,2,3,4,5]
a.splice(2,1) //[1,2,4,5]
console.log(a)

var a=[1,2,3,4,5]
a.splice(2,2) //[1,2,5]
console.log(a)

// add usng splice

var a =[1,2,3,4,5,6]
a.splice(2,0,0.3)
console.log(a)
