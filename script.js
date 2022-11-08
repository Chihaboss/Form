// All selectors
const menuIcon = document.querySelector('.menu_icon img');
const sideBar = document.querySelector('.side_bar');
const main = document.querySelector('.main');
const circle = document.querySelector('.circle');
const contentHeading = document.querySelector('.content h1');
const contentPara = document.querySelector('.content p');
const content = document.querySelector('.content');
const handle = document.querySelector('.handle');
const img = document.querySelector('.left_side img');
const rightSide1 = document.querySelector('.right_side1');
const rightSide2 = document.querySelector('.right_side2');
const inputField = document.querySelectorAll('.input_field');

// showing side bar menu
menuIcon.addEventListener("click", () =>{
    sideBar.classList.toggle('move');
    menuIcon.classList.toggle('move');
    menuIcon.classList.contains('move') ? menuIcon.src = "images/close.png":menuIcon.src = "images/menu.png"
    main.classList.toggle('move');
})

// Move the elements left and right
handle.addEventListener("click", (e) => {
    circle.classList.toggle('move');
    img.classList.toggle('move');
    content.classList.toggle('move');
    rightSide1.classList.toggle('move');
    rightSide2.classList.toggle('move');
    if(handle.innerHTML === 's inscrire'){
        contentHeading.innerHTML = 'Vous etes deja inscris ?';
        contentPara.innerHTML = 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a';
        handle.innerHTML = 'Se connecter';
        
    } else{
        contentHeading.innerHTML = 'Vous etes nouveau ?';
        contentPara.innerHTML = 'Pas encore inscrit?';
        handle.innerHTML = 'S inscrire';
    }
})

// input field text animation 
inputField.forEach((e) => {
    e.addEventListener('focus', () => {
        e.classList.add('active');
    })
    e.addEventListener('blur', () => {
        if(e.value != "") return;
        e.classList.remove('active')
    })
})