// <!-- Arrow function -->

var phone = function(){
    console.log("Hello")
}
phone()

// ex1 (using arrows ()=> syntax)

var add = (a,b)=>{
    return(a+b)
}
var res = add(10,20)
console.log(res)

// classes 

class Student {

    sname = ""
    mark = 0

     studentdetails = ()=>{
        console.log("Name is "+ this.sname)
        console.log("mark is" + this.mark)
    }
}

var mani = new Student()
mani.sname = "Mani"
mani.mark = 45

mani.studentdetails()

// second method of classes

class StudentTable{
    //  sname = ""
    //  mark = 0  automatically object will create
    constructor(rname,marks){
        this.rname = rname;
        this.marks = marks;

    }
    studentdetail = ()=>{
        console.log("Name is " + this.rname)
        console.log( this.rname +" Mark is " + this.marks)
    }

}
var raj = new StudentTable("raj",96)
raj.studentdetail()

// callback using arrow function

var chocolate = ()=>{
    console.log("this is choclate")
}

var shop = (chocolate)=>{
    console.log("this is shop")
    chocolate()
}

shop(chocolate)