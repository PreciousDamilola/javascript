const p = 7
const d = 9
let x = 8
let o = 5
var v = 7
var v = 8


// const pv = p + v;
// console.log(pv)
// const dami = document.getElementById('precious')
// console.log(dami)
// dami.innerHTML = pv


// const n = pv * d
// console.log(n)
// const home = document.getElementById("assignment")
// home.innerHTML = n



// // // ASSIGNMENT FOR 09TH OF AUGUST
// // let button = document.getElementById("myButton")
// // let paragraph = document.getElementById("myParagraph")
// // console.log(button)
// // console.log(paragraph)

// // button.addEventListener('click', () => {
// //     paragraph.classList.toggle('hidden');
// })




let j = 2
j **= 5
console.log(j)
console.log(typeof j)
// first function practice
const we = document.getElementById("we")
function note() {
    const bag = "This is my first function practice"
    we.innerHTML = bag
}
note()


// second function practice

//using const instead of function
// const precious = (p, d) => {
//     return p * d
// }

// let me = precious(4, 5)
// let guide = document.getElementById("put")
// guide.innerHTML = me;



// Function assignment 15/08/2024
// Multiply

function Multiply(a, b) {
    { return a * b }

}

let worth = Multiply(20, 2)

let both = document.getElementById("open")
both.innerHTML = worth;


// // divide

// function divide(v, g) {
//     return v / g
// }
// let the = divide(20, 2)
// let us = document.getElementById("close")
// us.innerHTML = the;

// Addition
// function addition(i, t) {
//     return i + t

// }
// let tion = addition(5 + 2)
// let make = document.getElementById("value")
// make.innerHTML = tion;
// console.log(tion)



// function modulus(ti, pi) {
//     return ti % pi
// }

// let lus = modulus(5, 2)
// let mod = document.getElementById("lu")
// mod.innerHTML = lus
// // console.log(lus)










// class work on function
function meets(ab, bu) {
    return [ab + bu + "<br>" + ab - bu]

}
let qu = meets(2, 3)

console.log(qu)
let md = document.getElementById("findme")
md.innerHTML = "2 + 3 is = " + qu + "<br>" + "4 - 2 is = " + qu;






// Object practice

// const human = {};
// human.height = 6
// human.age = 30
// human['complexion'] = "Brown"
// human.parts = function () {
//     return this.height + " " + this.age
// }
// console.log(human)

const human = {
    age: 30,
    height: 6,
    head: {
        eyecolor: "blue",
        nose: "wide",
        mouth: "small",
    }
}

human.name = "Shola"
human.age = 24
console.log(human.name + " has a very " + human.head.nose + " nose " + " and she is " + human.age + " years old ")

let shola = document.getElementById("jet")
shola.innerHTML = human.name + " has a very " + human.head.nose + " nose " + " and she is " + human.age + " years old "



parts = function () {
    return this.height + " " + this.age
}
console.log(human)




// assignment for 16th august 2024
const employee = {
    name: "   Adetunji Precious Damilola",
    age: 10,
    place: "Safehands",
    hobbies: "Coding,Sleeping,Eating",
    certificates: {
        seniorSecondarySchoolcertificate: "WAEC ,NECO",
        higherDiploma: "Bsc in Computer Science"
    }
}
console.log(employee)
let process = document.getElementById("profile")

process.innerHTML = "Full-name:        " + employee.name + "<br>"
    + "Age:             " + employee.age + " years" + "<br>"
    + "Place Of Work:       " + employee.place + "<br>"
    + "Hobbies:    " + employee.hobbies + "<br>"
    + "O'level Certificates:          " + employee.certificates.seniorSecondarySchoolcertificate + "<br>"
    + "Higher Institution Certificate:         " + employee.certificates.higherDiploma;