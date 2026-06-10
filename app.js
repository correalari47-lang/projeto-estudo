"use strict";
const switcher = document.querySelector("button");

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        this.textContent = 'light';
    } else {
        this.textContent = 'dark';
    }
}); 

console.log('current class name: ' + document.body.className);