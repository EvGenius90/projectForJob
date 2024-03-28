'use strict'

const form = document.getElementById('1')
const formFileds = form.elements
const submitBtn = document.querySelector('[type="submit"]')
const title = document.querySelector('.left-menu__title')


// при отправки формы, появляется текст в левом меню
function clearStorage(){
    
    title.innerHTML = 'Спасибо за зявку'
    form.innerHTML = 'Я обязательно свяжусь с вами в ближайшее время'
    title.style.cssText = `
    width: 290px;
    margin: 199px auto 98px;
    text-align: center
    `
    let logoStyle = document.createElement('div')
    logoStyle.innerHTML = 'ALEX.SHEVTSOV'
    form.append(logoStyle)
    logoStyle.style.cssText = `
    margin-top: 209px;
    margin-left: 200px;
    width: 169px;
    border-top: white solid 1px;
    border-bottom: white solid 1px;
    font-size: 20px;
    `
    form.style.cssText = `
    font-size: 40px;
    width: 420px;
    margin: 0 auto;
    text-wrap: balance;
    text-align: center;
    `

    const screen = window.matchMedia("(max-width: 575px)")

    // если разрешение меньше 575 то меняется стиль текста в левом меню
    if(screen.matches){
        title.style.cssText = `
        font-size: 50px;
        text-align: center;
        `
        form.style.cssText = `
        font-size: 20px;
        width: 220px;
        text-align: center;
        margin: 0 auto;
        `
        logoStyle.style.cssText = `
        margin-top: 150px;
        margin-left: 100px;
        width: 169px;
        border-top: white solid 1px;
        border-bottom: white solid 1px;
        font-size: 20px;
        `
    }
}


submitBtn.addEventListener('click', clearStorage)

// запись в localStorage
function changeHandler(){
    if(this.type !== 'checkbox'){
        localStorage.setItem(this.name, this.value)
    }else{
        localStorage.setItem(this.name, this.value)
    }
}


function checkStorage(){
    for(let i of formFileds){
        if(i.type !== 'submit'){
            if(i.type === 'checked'){
                i.checked = localStorage.getItem(i.name)
            }
            else{
                i.value = localStorage.getItem(i.name)
            }
        }
    }
    attachEvents();
}

function attachEvents(){
    for(let i of formFileds){
        i.addEventListener('change', changeHandler)
    }
}


checkStorage();

const btnConsul = document.querySelectorAll('.button-consultation')
const lMenu = document.querySelector('.left-menu')
const leftMenu = document.querySelector('.leftMenu')
const fon = document.querySelector('.fon')
const dBlock = document.querySelector('.dBlock')
const menuActive = document.querySelector('.header__menu-active')
const headerMenu = document.querySelector('.header__menu')



// Открытие левого меню при клике
for(let i of btnConsul){

    i.addEventListener('click', _=>{

        lMenu.classList.add('leftMenu')
        fon.classList.add('dBlock')
        
    })
    
}


// закрытие левого меню при клике на крестик
document.querySelector('.close').addEventListener('click', _=>{

    lMenu.classList.remove('leftMenu')
    fon.classList.remove('dBlock')

})

// при нажатии на кнопку hamburger открывается меню справо
document.querySelector('.hamburger').addEventListener('click', _=>{

    headerMenu.classList.add('header__menu-active')
    document.body.style.overflow = 'hidden'

})

// при нажатии на крестик закрывается меню
document.querySelector('.header__menu-close').addEventListener('click', _=>{

    headerMenu.classList.remove('header__menu-active')
    document.body.style.overflow = ''

})
