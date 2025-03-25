//Functions
//Void type functions
function PrintMsg(){
    console.log("\n01.Hello JS")
}
PrintMsg()

//Return type functions
function sum(){
    return 5 + 1
}
console.log("\n02." + sum())

//parameterized functions
function sub(a, b){
    return a - b
}
console.log("\n03." + sub(10, 5))

//arrow function
const msg = ()=> {return console.log("\n04.Hello JS")}
msg()

//arrow function - Rest parameter
const mySum1 = (...n)=> {
    console.log("\n05." + n)
}
mySum1(6, 5, 7, 8, 9)

const mySum2 = (...n)=> {
    return n.reduce((t, i) => t = t + i)
}
console.log("\n06." + mySum2(5, 5, 5, 8, 9))

//Callback function(fiunction passed as an argument)
// const myName = (name) => {console.log("My name is " + name)}
const greet = (msg, fun) => {
    console.log("\n07.Hi " + msg)
    fun()
}
greet("Good Morning", () => {console.log("My name is Isuru")});


