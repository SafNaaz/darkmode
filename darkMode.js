function toggleDarkMode() {
    var body = document.getElementById('body')
    var button = document.getElementById('dark-mode-button')
    if (body.className == 'body-light') {
        body.className = 'body-dark'
        button.innerHTML = '🌞'
        button.title = 'lights on'
    } else {
        body.className = 'body-light'
        button.innerHTML = '🌙'
        button.title = 'dark mode'
    }
}

// Code for smooth scroll
let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth'
            // block: 'start',
            // inline:'nearest'
        })
        history.pushState(null, null, hashval) // for url updation
        e.preventDefault() //needed for scroll
    })
}
//new codes add below

//Code for switching to dark mode at specific times
window.onload = function(){
var today = new Date()
var time = today.getHours()
if(time < 6 || time >= 20){
   var body = document.getElementById('body')
   var button = document.getElementById('dark-mode-button')
   body.className = 'body-dark'
   button.innerHTML = '🌞'
   button.title = 'lights on'
  }
}

//Code for hiding nav bar

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
