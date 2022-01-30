console.log("The jQuery is linked!");

// .flip to make images flip to reveal text 
// .trigger on click - may not need this if using on click?

$(() => {

// ============= hamburger nav menu =================


const $hamburgerButton = $('.hamburger-button')
const $navLinks = $('.nav-links')

$hamburgerButton.on('click', () => {
    $navLinks.toggle(600).appendTo('.header')
})

// ============ resume accordion =================


    $('#accordion-1').accordion( {
        collapsible: true,
        active: false
    })
    $('#accordion-2').accordion( {
        collapsible: true,
        active: false
    })
    
})

