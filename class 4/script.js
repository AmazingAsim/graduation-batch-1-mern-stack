// // primitive 
// let name = "Asim" // '' ""  `` strings
// let age = 26 // number
// let hungry = true; // boolean
// let car;  // undefined
// let errors = null; // null

// // object
// let fruits = ['apple','banana']

// console.log(typeof(fruits));

// function add(a,b){
//   alert(a+b)
//   return a+b
// }

// let res = add(4,6)
// add(4,7)

// let write = function(){}

// // arrow function; es6 
// let jump = ()=>{}

// let car = {
//     start: ()=>{console.log(this)},
//     stop: function(){console.log(this)}
// }
// car.start()
// car.stop()
// // higher order function and callback functions
// setTimeout(function(){
//     console.log('hello')
// },1000);


// objects literals

let pen = {
    inkcolor:"black",
    length:15,
    write: function(message){
        alert(message)
    }
}

function User(name,email,password){
  this.username = name;
  this.useremail = email;
  this.password = password;
  this.intro = function(){
    alert(`hello my name is ${this.username} and my email is ${this.useremail}`);
  }
}

// let Asim = new User('Asim sheikh','asim@gmail.com','0000');
// Asim.intro()

for(let a in pen){
    console.log(a)
};

