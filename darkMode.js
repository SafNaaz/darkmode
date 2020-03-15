function toggleDarkMode() {
    var body = document.getElementById('body')
    var button = document.getElementById('dark-mode-button')
    var navBar = document.getElementById('nav-bar')
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
        console.log('item')
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