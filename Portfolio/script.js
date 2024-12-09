// JavaScript function to filter project cards by category using data attributes

function filterCategory(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    // First, hide all project cards with fade-out effect
    projectCards.forEach(card => {
        card.classList.remove('show'); // Remove the fade-in effect
        card.style.display = 'none';  // Hide the card
    });

    if (category === 'all') {
        // Show all cards if 'all' is selected
        projectCards.forEach(card => {
            card.style.display = 'block'; // Make the card visible
            // Wait for a tiny moment before adding the 'show' class to trigger fade-in
            setTimeout(() => card.classList.add('show'), 10);
        });
    } else {
        // Show only the cards that match the selected category
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'block'; // Show the card
                // Apply fade-in animation
                setTimeout(() => card.classList.add('show'), 10); 
            }
        });
    }
}


// Function to observe when an element is in view and add 'show' class
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'show' class to the card and its image to trigger the fade-in
            entry.target.classList.add('show');
            entry.target.querySelector('img').classList.add('show');
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the project card is in the viewport
});

// Target all project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    observer.observe(card); // Observe each project card
});

function toggleMenu() {
    // Get elements
const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('#overlay');
const navbar = document.querySelector('#navbar');
const closeBtn = document.querySelector('.close-btn');

// Show navbar and overlay when the hamburger is clicked
menuToggle.addEventListener('click', function() {
    navbar.classList.add('show');
    overlay.style.display = 'block'; // Show the overlay
});

// Hide navbar and overlay when the close button is clicked
closeBtn.addEventListener('click', function() {
    navbar.classList.remove('show');
    overlay.style.display = 'none'; // Hide the overlay
});

// Hide navbar and overlay if clicked outside the navbar (on the overlay)
overlay.addEventListener('click', function() {
    navbar.classList.remove('show');
    overlay.style.display = 'none'; // Hide the overlay
});

}


// JavaScript to handle scroll event and apply sticky header styles
window.onscroll = function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 0) {
        // When the user scrolls down, add 'sticky' class
        header.classList.add('sticky');
    } else {
        // When at the top of the page, remove 'sticky' class
        header.classList.remove('sticky');
    }
};

function showSection(sectionId) {
    // Hide all main sections
    const mainSections = document.querySelectorAll('.main-section');
    mainSections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Hide Category Navigation if not in Design section
    const categoryNav = document.querySelector('.category-navigation');
    if (sectionId === 'design') {
        categoryNav.style.display = 'flex';
    } else {
        categoryNav.style.display = 'none';
    }

    // Hide all project categories (Design, Games, Projects, etc.)
    const projectCategories = document.querySelectorAll('.project-category');
    projectCategories.forEach((category) => {
        category.style.display = 'none';
    });

    // Show the corresponding project category if it matches the section
    const selectedCategory = document.getElementById(sectionId);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }

    // Show items based on the sectionId (Design, Games, Projects, Video, etc.)
    if (sectionId === 'games') {
        showGameItems(); // Show game items when 'Games' is selected
    } else if (sectionId === 'design') {
        showDesignItems(); // Show design items when 'Design' is selected
    } else if (sectionId === 'projects') {
        showProjectItems(); // Show project items when 'Projects' is selected
    } else if (sectionId === 'video') {
        showVideoItems(); // Show video items when 'Video' is selected
    } else if (sectionId === 'model') {
        showModelItems(); // Show 3D items when '3D' is selected
    } else if (sectionId === 'others') {
        showOtherItems(); // Show other items when 'Others' is selected
    }
}

// Function to show game items
function showGameItems() {
    const gameItems = document.querySelectorAll('#games .project-card');
    gameItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Function to show design items
function showDesignItems() {
    const designItems = document.querySelectorAll('#design .project-card');
    designItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Function to show project items
function showProjectItems() {
    const projectItems = document.querySelectorAll('#projects .project-card');
    projectItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Function to show video items
function showVideoItems() {
    const videoItems = document.querySelectorAll('#video .project-card');
    videoItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Function to show Model items
function showModelItems() {
    const modelItems = document.querySelectorAll('#model .project-card');
    modelItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Function to show other items
function showOtherItems() {
    const otherItems = document.querySelectorAll('#others .project-card');
    otherItems.forEach((item) => {
        item.style.display = 'block';
    });
}

// Select the back-to-top button
const backToTopBtn = document.getElementById('backToTopBtn');

// Show the button when the user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll smoothly to the top when the button is clicked
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get all category buttons
const categoryButtons = document.querySelectorAll('.category-navigation button');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to the clicked button
        button.classList.add('active');
    });
});



