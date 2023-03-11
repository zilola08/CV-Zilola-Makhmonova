
// Make navbar collapse on click outside: 

// FIRST create a media condition that targets viewports smaller than 576px wide. Because if the screen is big, the navbar will already be expanded and javascript would try to collapse the non-collapsible nav menu everytime user clicks on the link to navigate:

var jmediaquery = window.matchMedia("(max-width: 576px)")
if (jmediaquery.matches) {

    // select the div where the class "collapsed" is added whenever the navbar is collapsed (nav menu is opened)

    const togglerButton = document.getElementById('toggler-button')

    // check if the the navbar is not collapsed (nav menu is opened)

    if (!togglerButton.classList.contains('collapsed')) {

        // select the links, to add a click listener later to them:
        const navLinks = document.querySelectorAll('.nav-item')

        // select the expanded (shown) are, to hide it later = which is equal to closing the navbar:
        const expandedArea = document.getElementById('navbarSupportedContent')

        // create a new object of the expanded area, with the property toggle, and set the toggle property to false (so that when you load the page the menu is collapsed by default, not expanded):
        const bsCollapse = new bootstrap.Collapse(expandedArea, { toggle: false })

        navLinks.forEach((link) => {
            link.addEventListener('click', () => { bsCollapse.toggle() })
        })
    }
}

// Typing-animation on home-page

var typed = new Typed(".intro-text", {
    strings: ["Hello!", "Nice to have you here!", "Slide right for more info ;)"],
    typeSpeed: 50,
    fadeOut: true,
    backDelay: 1700,
    loop: true,
    showCursor: false,
})