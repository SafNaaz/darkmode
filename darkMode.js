
function toggleDarkMode() {
    var body = document.getElementById('body')
    var button = document.getElementById('dark-mode-button')
	if (body.className == 'body-light') {
        body.className = 'body-dark'
        button.innerHTML = '🌞'
        button.title = 'lights on'
	setMode('dark')
    } else {
        body.className = 'body-light'
        button.innerHTML = '🌙'
        button.title = 'dark mode'
	setMode('light')
    }
}


function setMode(value) {
   if (sessionStorage.getItem('mode') != value) {
       sessionStorage.setItem('mode', value);
  }
}

function getMode() {
    myValue = null;
    if (sessionStorage.getItem('mode')) {
        myValue = sessionStorage.getItem('mode');
    }
     return myValue;
}

let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
    item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline:'nearest'
        })
        history.pushState(null, null, hashval) // for url updation
        e.preventDefault() //needed for scroll
    })
}
//new codes add below


window.onload = function switchMode() {
	
	if(!(getMode() === null)){
		var body = document.getElementById('body')
    var button = document.getElementById('dark-mode-button')
	if (getMode() == 'dark') {
        body.className = 'body-dark'
        button.innerHTML = '🌞'
        button.title = 'lights on'
	
    } else {
        body.className = 'body-light'
        button.innerHTML = '🌙'
        button.title = 'dark mode'
	
    }
	}else{
		var today = new Date()
		var time = today.getHours()
		if (time < 6 || time > 20) {
			var body = document.getElementById('body')
			var button = document.getElementById('dark-mode-button')
			body.className = 'body-dark'
			button.innerHTML = '🌞'
			button.title = 'lights on'
		}
	}
}


 var prevScrollpos = window.pageYOffset;
 window.onscroll = function () {
     var currentScrollPos = window.pageYOffset;
     if (currentScrollPos > 0) {
         if (prevScrollpos > currentScrollPos) {
             document.getElementById("navigation").style.top = "0";
             document.getElementById("footer").style.bottom = "0";
         } else {
             document.getElementById("navigation").style.top = "-70px";
             document.getElementById("footer").style.bottom = "-70px";
         }
         prevScrollpos = currentScrollPos;
     }
	 scrollFunction();
 }
 
 
 //Get the button:
mybutton = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
//window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
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
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

