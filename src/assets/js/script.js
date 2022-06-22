var date = new Date();
var currentYear = date.getFullYear();
console.log(currentYear);
document.getElementById('year').innerText = " "+currentYear+" ";


document.getElementById('check').addEventListener('click', function () {
    window.open('http://localhost:63342/My%20Design/own-portfolio/contact.html');
})