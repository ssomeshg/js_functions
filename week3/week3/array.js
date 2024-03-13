var a =[10,20,30,40]
console.log(a)

// add array

// using push() - add a given number to the last of an array

var a =[10,20,30,40]
a.push(50)

console.log(a)

// remove array ele
//using pop()- remove last element in th array
var a =[10,20,30,40]
a.pop()

console.log(a)


var a = [55,24,35,4,98,57]

for (count=0; count<=5; count++){
    console.log(a[count])
}

var a = [1,2,3,4,5,6,7,8,9,10]

for (count=0; count<10; count =count+1)
{
  if(a[count]%2 == 0){
    console.log(a[count] + " Even Number")
  }
  else if(a[count]%2 !=0){
    console.log(a[count])
  }
}