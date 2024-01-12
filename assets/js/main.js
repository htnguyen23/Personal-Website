/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')

    // when the scroll is greater than 50 viewport height, add the scroll-header to the header tag
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)
}


/*=============== ABOUT IMAGES CAROUSEL ===============*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.work_modal'),
      modalBtns = document.querySelectorAll('.work_button'),
      modalClose = document.querySelectorAll('.work_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

/*var of modal to open*/
modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

/*var of modal to close*/
modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 
const linkProject = document.querySelectorAll('.project_item')

function activeProject() {
    linkProject.forEach(l => l.classList.remove('active-project'))
    this.classList.add('active-project')
}

linkProject.forEach(l => l.addEventListener('click', activeProject))


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

