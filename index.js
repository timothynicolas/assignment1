window.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname;

    if (currentPage === '/index.html') {
        alert("Hello! Welcome to my Website! - NICOLAS, Paul Timothy L.")
    } 
});

console.log(window.location.pathname);

const aboutButton = document.getElementById("about-under-dev");
const contactButton = document.getElementById("contact-under-dev");
const mainContent = document.getElementById('main-content');



const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');


function showPopup() {
    popup.style.display = 'flex'; 
    mainContent.classList.add('blur');
    footer.classList.add('blur');
}


function hidePopup() {
    popup.style.display = 'none';
    mainContent.classList.remove('blur');
    footer.classList.remove('blur');
}


aboutButton.addEventListener('click', showPopup);
contactButton.addEventListener('click', showPopup);
closePopup.addEventListener('click', hidePopup);
