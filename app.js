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
const accordionFunction = () => {
    $('#accordion-1').accordion( {
        collapsible: true,
        active: false
    })
    $('#accordion-2').accordion( {
        collapsible: true,
        active: false
    })
}

accordionFunction()
// ============ contact page text inputs =================    

// input boxes: 
// first name
// email
// company
// phone
// subject
// message 
// submit button
   
const $firstName = $('<section>').attr('id', 'first-name')
$firstName.appendTo('.contact-form')
$firstName.append('<input id="name" type="text" placeholder="Your Name"/>')
$firstName.append('<input id="email" type="text" placeholder="Your Email"/>')
$firstName.append('<input id="phone" type="text" placeholder="Phone"/>')
$firstName.append('<input id="company" type="text" placeholder="Company"/>') 
$firstName.append('<input id="subject" type="text" placeholder="Subject"/>')
$firstName.append('<input id="message" type="text" placeholder="Message"/>')
   
 

})

