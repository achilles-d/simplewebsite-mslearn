'use strict'
console.log('Message');
let todaysDate = new Date();
let formatDate = todaysDate.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;