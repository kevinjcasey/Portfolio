// console.log("The jQuery is linked!");

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

    setTimeout(openModal, 10000);

// ============= hamburger nav menu ======================

    const $hamburgerButton = $('.hamburger-button')
    const $navLinks = $('.nav-links')

    $hamburgerButton.on('click', () => {
        // toggles display and animation duration
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

    const $submitButton = $('<section>').attr('id', 'submit')
    $submitButton.appendTo('.contact-form')
    $submitButton.append('<input id="submit-button" type="submit" value="Send Message"/>')

// ============ contact page send message modal =================  


    const $sendMessage = () => {
        $('#contact-modal').css('display', 'block')

        const $contactModal = $('<div>').attr('id', 'modal-2')
        $contactModal.appendTo('#contact-modal')
        $('<h3>').text('Thank you for reaching out!').appendTo($contactModal) 
        $('<h4>').text('You will hear back from me in three months after my bootcamp is finished.').appendTo($contactModal)

        const $closeBtn = $('<button>').attr('id','close-btn').text('Hooray!')
        $closeBtn.appendTo($contactModal)
        $closeBtn.on('click', () => {
        // necessary?
            $closeContactModal
        // reloads contact page 
           location.reload()
        })
    }   

    $submitButton.on('click', () => {
        $sendMessage()
    })

    const $closeContactModal = () => {
        $('#contact-modal').css('display', 'none')
    }

})

