const hamburgerMenu = document.querySelector('#menu-toggle')
const menu = document.querySelector('#menu')

hamburgerMenu.addEventListener('click', () => {
    if (menu.classList.contains('open-menu')) {
        // remove class name
        menu.classList.remove('open-menu')
    } else {
        // add class name
        menu.classList.add('open-menu')
    }
})
