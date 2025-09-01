// --- Reusable Navbar Loader ---
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        const navbarContainer = document.getElementById('navbar-container');
        if (navbarContainer) {
            navbarContainer.innerHTML = data;

            // --- Hamburger Menu Functionality ---
            const hamburger = document.getElementById('hamburger-menu');
            const navLinks = document.getElementById('nav-links');
            const dropdowns = document.querySelectorAll('.dropdown .dropbtn');

            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    hamburger.classList.toggle('active'); // Toggle active class for 'X' animation
                });
            }

            // --- Mobile Dropdown Functionality ---
            dropdowns.forEach(dropbtn => {
                dropbtn.addEventListener('click', (e) => {
                    // Check if we are in mobile view
                    if (window.innerWidth <= 768) {
                        // Prevent link from navigating on click for mobile dropdown
                        e.preventDefault();
                        const parentDropdown = dropbtn.parentElement;
                        parentDropdown.classList.toggle('active');
                        
                        const dropdownContent = dropbtn.nextElementSibling;
                        if (parentDropdown.classList.contains('active')) {
                            dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
                        } else {
                            dropdownContent.style.maxHeight = null;
                        }
                    }
                });
            });
        }
    });

// --- Reusable Footer Loader ---
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            footerContainer.innerHTML = data;
        }
    });


// --- Script for index.html specific elements ---
function initializeIndexScripts() {
    // Menu popup functionality
    const menuPopup = document.getElementById('menuPopup');
    const heroButton = document.querySelector('.hero .cta-button');
    const floatingButton = document.getElementById('floatingMenuButton');

    function openMenu() {
        if(menuPopup) {
            menuPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if(menuPopup) {
            menuPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    if(menuPopup) {
        // Close popup when clicking outside
        menuPopup.addEventListener('click', function(e) {
            if (e.target === this) {
                closeMenu();
            }
        });
        
        const closeButton = menuPopup.querySelector('.close-menu');
        if(closeButton) {
            closeButton.addEventListener('click', closeMenu);
        }
    }


    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Floating button logic
    const menuPreviewSection = document.getElementById('menu-preview');

    if (floatingButton && menuPreviewSection) {
        window.addEventListener('scroll', () => {
            const heroRect = document.querySelector('.hero').getBoundingClientRect();
             if (heroRect.bottom < 100) { 
                floatingButton.style.display = 'block';
            } else {
                floatingButton.style.display = 'none';
            }
        });
        floatingButton.addEventListener('click', openMenu);
    }
    
    // Update the hero button to call the openMenu function
    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            e.preventDefault();
            openMenu();
        });
    }

    // Zoom functionality for the menu image
    const menuImageFrame = document.getElementById('menuImageFrame');
    if (menuImageFrame) {
        const menuImage = menuImageFrame.querySelector('img');
        menuImageFrame.addEventListener('click', () => {
            menuImage.classList.toggle('zoomed');
            menuImageFrame.style.cursor = menuImage.classList.contains('zoomed') ? 'zoom-out' : 'zoom-in';
        });
    }
}

// Check if the current page is index.html before running specific scripts
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
    document.addEventListener('DOMContentLoaded', initializeIndexScripts);
}

