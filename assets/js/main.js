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
let currSlide = 0;
let intervalID;

function showSlide(index) {
    const slides = document.getElementsByClassName('carousel-slide');
    // hide all slides
    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // display the selected slide
    slides[index].style.display = 'flex';
}

function nextSlide() {
    currSlide = (currSlide + 1) % document.getElementsByClassName('carousel-slide').length;
    showSlide(currSlide);
    resetInterval();
}

function prevSlide() {
    currSlide = (currSlide - 1 + document.getElementsByClassName('carousel-slide').length) % document.getElementsByClassName('carousel-slide').length;
    showSlide(currSlide);
    resetInterval();
}

function startInterval() {
    intervalID = setInterval(nextSlide, 5000); // Change 3000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)
    console.log("startInterval()")
}

function resetInterval() {
    clearInterval(intervalID);
    startInterval()
}

// start the carousel automatically
startInterval();
// handle user interaction to reset the timer
document.getElementById('carousel_left').addEventListener('click', function() {
    prevSlide();
});
document.getElementById('carousel_right').addEventListener('click', function() {
    nextSlide();
});



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

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// activate/deactivate the theme manually w button
themeButton.addEventListener('click', () => {
    // add or remove the light/icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme and the current icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

