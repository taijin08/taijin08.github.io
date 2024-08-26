// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myVariable; 
// declare a variable
myVariable = "Bob";
// or: let myVariable = "Bob";

// data types:
// String, Number, Boolean, Array, Object

// Operators:
// + - * /, =, ===, !, !==

// Conditionals
let iceCream = "Chocolate";
if (iceCream === "Chocolate") {
    alert("Yay, I love Chocolates");
} else {
    alert("Fuck, My favourite is chocolate!")
}

document.querySelector("html").addEventListener("click",curse());
document.querySelector("html").addEventListener("click",function () {
    alert("I'm dying!");
}); // this is an anonymous function
// Anonymous function can also write like this:
document.querySelector("html").addEventListener("click", () => {alert("just don't do this!")});

// Functions
function curse() {
    alert("U basterd!");
    return;
}
