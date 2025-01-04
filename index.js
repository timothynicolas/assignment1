//alert("Hello! Welcome to my first website! - NICOLAS, Paul Timothy L.");

const aboutButton = document.getElementById("about-under-dev");
const contactButton = document.getElementById("contact-under-dev");
const mainContent = document.getElementById('main-content');



const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

// Function to show the pop-up
function showPopup() {
    popup.style.display = 'flex'; 
    mainContent.classList.add('blur');
    footer.classList.add('blur');
}

// Function to hide the pop-up
function hidePopup() {
    popup.style.display = 'none';
    mainContent.classList.remove('blur');
    footer.classList.remove('blur');
}

// Attach event listeners
aboutButton.addEventListener('click', showPopup);
contactButton.addEventListener('click', showPopup);
closePopup.addEventListener('click', hidePopup);