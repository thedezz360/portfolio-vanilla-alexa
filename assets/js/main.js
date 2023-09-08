/* MENU SHOW Y HIDDEN*/
const navMenu = document.getElementById('nav-menu')
const navToggle= document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/** Menu show */
/** Validate if constant exist */
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  })
}

/** Menu hidden */
/** Validate if constant exist */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//** REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav_link')

function linkAction (){
  const navMenu = document.getElementById('nav-menu')
  // when we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))