
/*

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'LeonieandI.jpg') {
      myImage.setAttribute('src','Galaxy.jpg');
    } else {
      myImage.setAttribute('src','LeonieandI.jpg');
    }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
    if(!myName) 
    {
    setUserName();
  }
  else
  {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName + '!';
}
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}


var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})*/

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})