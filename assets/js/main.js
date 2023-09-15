/* MENU SHOW Y HIDDEN*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/** Menu show */
/** Validate if constant exist */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/** Menu hidden */
/** Validate if constant exist */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//** REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach((link) => link.addEventListener('click', linkAction))

/** ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName('skills_content')
const skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
  let itemClass = this.parentNode.className
  console.log(itemClass)
  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close'
  }
  if (itemClass === 'skills_content skills_close') {
    this.parentNode.className = 'skills_content skills_open'
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills)
})

/** QUALIFICATION TABS */
const tabs = document.querySelectorAll('[data-target]')
console.log(tabs)
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tabs.forEach((tab) => {
      tab.classList.remove('qualification_active')
    })

    tab.classList.add('qualification_active')
  })
})

/** SERVICES MODAL */
const modalViews = document.querySelectorAll('.services_modal')
const modalBtns = document.querySelectorAll('.services_button')
const modalCloses = document.querySelectorAll('.services_modal-close')

const modal = (modalClick) => {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

/** PORTFOLIO SWIPER */
var swiperPortfolio = new Swiper('.swiperPortfolio', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

var swiperTestimonial = new Swiper('.swiperTestimonial', {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true
  },
  breakpoints: {
    568: {
      slidesPerView: 2
    }
  }
})

/** SCROLL SECTION ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight

    const sectionTop = current.offsetTop - 50

    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*=${sectionId}]`)
        .classList.add('active-link')
    } else {
      document
        .querySelector(`.nav_menu a[href*=${sectionId}]`)
        .classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
