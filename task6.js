//2nd item background color green
let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = "green";

//3rd item invisible
let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display="none";


//2nd item font-color green
let items = document.querySelectorAll('.list-group-item');
items[1].style.color = "green";

//odds background green
let odds = document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let odd of odds)
odd.style.backgroundColor="green";