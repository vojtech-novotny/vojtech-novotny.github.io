// TODO: Change the way contact form is closed

function myOnloadFuntion() {
    let mainContainer = document.getElementById('MainContainer');
    let contactForm = document.getElementById('ContactForm');
    let contactButton = document.getElementById('ContactButton');
    let imageForm = document.getElementById('ImageForm');
    let imageFormImage = document.getElementById('ImageFormImage');
    let workImageThumbnail = document.getElementById('WorkImageThumbnail');

    document.onkeydown = function(event)
        { 
            if (event.key === 'Escape') {
                hide(contactForm); 
                mainContainer.style.filter = '';
            }
        };

    contactForm.onclick = function()
        { 
            hide(contactForm); 
            mainContainer.style.filter = '';
        };

    contactButton.onclick = function() 
        { 
            show(contactForm); 
            mainContainer.style.filter = 'blur(3px)';
        };

    imageForm.onclick = function()
        { 
            hide(imageForm); 
            mainContainer.style.filter = '';
        };

    workImageThumbnail.onclick = function()
        { 
            imageFormImage.setAttribute('src', 'assets/img/MuzaciPageF.png');
            show(imageForm);
            mainContainer.style.filter = 'blur(3px)';
        }
}

/**
 * Hides the visible element from document.
 * @param {HTMLElement} element The element to be hidden.
 */
function hide(element) {
    if (!element.classList.contains('hidden'))
        element.classList.add('hidden');
}

/**
 * Shows the hidden element in the document.
 * @param {HTMLElement} element The element to be shown. 
 */
function show(element) {
    if (element.classList.contains('hidden'))
        element.classList.remove('hidden');
}