/* dark mode code */
const darkModeButtonId = 'dark-mode-button';

function darkMode() {
    let button = document.getElementById(darkModeButtonId);
    document.body.className = 'body-dark';
    button.innerHTML = '🌞';
    button.title = 'lights on';
}

function lightMode() {
    let button = document.getElementById(darkModeButtonId);
    document.body.className = 'body-light';
    button.innerHTML = '🌙';
    button.title = 'dark mode';
}

function toggleDarkMode() {
    if (document.body.className == 'body-light') {
        darkMode()
        setModeInSession('dark');
    } else {
        lightMode()
        setModeInSession('light');
    }
}

// to save the state of the mode to appear across pages in current browser session
function setModeInSession(value) {
    if (sessionStorage.getItem('mode') != value) {
        sessionStorage.setItem('mode', value);
    }
}

function getModeFromSession() {
    return sessionStorage.getItem('mode');
}

window.onload = function switchMode() {
    if (!(getModeFromSession() === null)) { //get the mode and apply for current page
        if (getModeFromSession() == 'dark') {
            darkMode()
        } else {
            lightMode()
        }
    } else { //if no mode in session apply dark mode based on current time
        let today = new Date()
        let time = today.getHours()
        if (time < 6 || time > 20) {
            darkMode()
        }
    }
}

/* dark mode code - ends */

/* scroll to anchor */
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
            //block: 'start',
            //inline:'nearest'
        })
        history.pushState(null, null, hashval) // for url updation
        e.preventDefault() //needed for scroll
    })
}
/* scroll to anchor - ends */

/* go to top button */

var prevScrollpos = window.pageYOffset;
const navigationBarId = 'navigation';
const footerId = 'footer';
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById(navigationBarId).style.top = "0";
            document.getElementById(footerId).style.bottom = "0";
        } else {
            document.getElementById(navigationBarId).style.top = "-70px";
            document.getElementById(footerId).style.bottom = "-70px";
        }
        prevScrollpos = currentScrollPos;
    }
    scrollFunction();
}

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let goToTopButton = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none"; // to disappear once scroll ends
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTopFunction() {
    scrollToTop();
    //document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) { // check if page reached top or not
        window.requestAnimationFrame(scrollToTop); // for smooth animation
        window.scrollTo(0, c - c / 8);
    }
};

/* go to top button - ends*/

