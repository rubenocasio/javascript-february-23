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
    // console.log(myName)
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
// console.log(skills)

skills[0] = "fixing bugs"
// console.log(skills)

// Hoisting
// var ruben;
// console.log(ruben)
// var ruben = "Great"

// var ruben
// ruben = "Great"
// console.log(ruben)

// console.log(ruben)
let ruben;

// Destructuring
const person = {
    firstName: "Bob",
    lastName: "Marley",
    email: "bob@marley.com",
    password: "sekureP@ssw0rd9",
    username: "barley",
    createdAt: 1543945177623,
};
//ES5
var hisName = person.firstName;
// console.log(hisName);
// console.log(person.firstName);

//ES6
const {firstName, username, email} = person
// console.log(firstName)


// console.log(animals[0])


// function changeName(){
    //     console.log("Ruben")
    // }
    // changeName()

// const changeName = () => {
    //     console.log("Ruben")
    // }
    // changeName()
    
    const post = {
        title: "First day in Javascript",
        viewers: 1000,
        likes: 500,
        description: "An awesome day with MERN. It works",
        hashtags: ["excellent", "great", "fun"],
    };
    const {title: newTitle, viewers, likes} = post
    // console.log(newTitle + '\n' + viewers, likes);
    
    // Spread / Rest
const animals = ["horse", "dog", "fish", "cat", "bird"];
// console.log(animals)

const animals2 = [...animals, "Parrott", "Snake", "Rats", "Lizard", "Wolf"]
// console.log(animals2)

const animals3 = [...animals2, "Honey badger", "Jakalope"]
// console.table(animals3)

// Arrow functions

//normal function
// function printHello(){
//     console.log("Hello")
// }
// printHello()

//ES6
let yourName = "Ruben"
const printHello = () => {
    console.log(`Hello ${yourName}`);
}
// printHello()

function changePrice(price, discount){
    return price * discount
}
// console.log(changePrice(100, 0.5))


const changePrice2 =  (price, discount) => {
    return price * discount
}
// console.log(changePrice2(100, 0.5))

const changePrice3 = (price, discount) => {
    let num = price * discount
    console.log(num)
}
// changePrice3(100, .5)

// Ternary functions
//if/else statement

const rating = 7
//Condition
// if(rating > 6){
//     //Truthy
//     console.log("I'm greater")
// } else {
//     //Falsy
//     console.log("I'm lesser")    
// }
//Condition                 //True                                        //False
rating > 8 ? console.log("I'm greater") : console.log("I'm lesser"); 