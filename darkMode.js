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


window.onload = function  switchMode(){
var today = new Date()
var time = today.getHours()
if(time < 6 || time >20){
	var body = document.getElementById('body')
	var button = document.getElementById('dark-mode-button')
	body.className = 'body-dark'
        button.innerHTML = '🌞'
        button.title = 'lights on'
		}
}