const myImage = document.querySelector("img");

alert("You can click the image to see the bloody one.")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Elephant.png") {
        myImage.setAttribute("src", "images/ElephantRed.png");
    } else {
        myImage.setAttribute("src", "images/Elephant.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Elephant is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Come to Visit My Freak Elephant!, ${myName}`;
  }
}

  
