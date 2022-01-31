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
   
const $contactForm = $('<section>').attr('id', 'inputs')
$contactForm.appendTo('.contact-form')
$contactForm.append('<input id="name" type="text" placeholder="Your Name"/>')
$contactForm.append('<input id="email" type="text" placeholder="Your Email"/>')
$contactForm.append('<input id="phone" type="text" placeholder="Phone"/>')
$contactForm.append('<input id="company" type="text" placeholder="Company"/>') 
$contactForm.append('<input id="subject" type="text" placeholder="Subject"/>')

const $messageBox = $('<section>').attr('id', 'message-box')
$messageBox.appendTo('.contact-form')
$messageBox.append('<textarea id="message" placeholder="Message"/>')


const $contactModal = $('#contact-modal')

const $submitButton = $('<section>').attr('id', 'submit')
$submitButton.appendTo('.contact-form')
$submitButton.append('<input id="submit-button" type="submit" value="Send Message"/>')

// $submitButton.on('click', () => {
//     $contactModal()
// })

})

