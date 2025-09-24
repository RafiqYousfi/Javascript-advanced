const firstName = document.getElementById('inputName');
const showName = document.getElementById('firstname')

function saveName(){
localStorage.setItem('firstname', firstName.value);
}

function getName(){
    localStorage.getItem('firstname')
    showName.innerText = localStorage.getItem('firstname')
}