var ask = document.querySelector('.ask');
var profile = document.querySelector('.black')
var button = document.querySelector('button');
var nameUser = document.querySelector('.name')
var nameBox = document.querySelector('.profile-name')
var picUser = document.querySelector('.avatar')
var picBox = document.querySelector('.profile-pic')
var edit = document.querySelector('i')

function injection () {
    nameBox.innerHTML = localStorage.getItem('newUser');
    picBox.style.background = `url(${localStorage.getItem('newPic')}) center/cover`;
}

button.addEventListener("click", function (){
    localStorage.setItem('newUser', nameUser.value);
    localStorage.setItem('newPic', picUser.value);

    ask.classList.toggle('move')
    profile.classList.toggle('move')
    injection ()
});

injection ()

edit.addEventListener("click", function (){
    ask.classList.remove('move')
    profile.classList.add('move')

    nameUser.value = localStorage.getItem('newUser');
    picUser.value = localStorage.getItem('newPic')
});

if (localStorage.getItem('newUser') && localStorage.getItem('newPic') != "") {
    ask.classList.add('move')
    profile.classList.remove('move')
}