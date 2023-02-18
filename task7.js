var items = document.querySelector('#items');
console.log(items.parentNode);
console.log(items.parentElement);
console.log(items.lastElementChild);
console.log(items.lastChild);
console.log(items.firstElementChild);
console.log(items.firstChild);
console.log(items.nextSibling);
console.log(items.nextElementSibling);
console.log(items.previousSibling);
console.log(items.previousElementSibling);
var newDiv = document.createElement('div');
var newDivText = document.createTextNode('Hello ');
newDiv.appendChild(newDivText);
newDiv.setAttribute('title','Hello div');

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

var greet = document.createElement('div');
var greetText = document.createTextNode('Hello');
greet.appendChild(greetText);
items.insertBefore(greet,items.children[0]);
