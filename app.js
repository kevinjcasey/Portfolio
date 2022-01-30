console.log("The jQuery is linked!");

// .flip to make images flip to reveal text 
// .trigger on click - may not need this if using on click?

$(() => {

// ============ modal pop-up on homepage =================

const $modal = $('#modal')
const $closeButton = $('#close')
const $claim = $('#claim')

const openModal = () => {
    $modal.css('display', 'block')
}
const closeModal = () => {
    $modal.css('display', 'none')
}

$closeButton.on('click', closeModal)
$claim.on('click', closeModal)

setTimeout(openModal, 5000);

// ============= hamburger nav menu ======================


const $hamburgerButton = $('.hamburger-button')
const $navLinks = $('.nav-links')

$hamburgerButton.on('click', () => {
    $navLinks.toggle(600).appendTo('.header')
})

// ============ resume accordion =========================


    $('#accordion-1').accordion( {
        collapsible: true,
        active: false
    })
    $('#accordion-2').accordion( {
        collapsible: true,
        active: false
    })



})

