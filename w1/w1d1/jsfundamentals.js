/*
    Stack Expectations
    Node install
    Chrome Extensions
    VS Code Extensions
    How to get support?
    Course Overview
    ECMAScript & ES6
    Debugging JS
*/

// Scope

var myName = "Ruben"
function changeName(){
    let myName = "Rebel"
    console.log(myName)
}
// changeName()

// Const vs Let vs Var
var food = "duck"
food = "Sushi"
// console.log(food)

for(let i = 1; i < 11; i++){
    // console.log(i)
}

const skills = ["debugging", "sleep", "brewing coffee"]
// skills = noSkills;
// skills.push("champ")
console.log(skills)

skills[0] = "fixing bugs"
console.log(skills)

// Hoisting
// Destructuring


// Spread / Rest
// Arrow functions
// Ternary functions
