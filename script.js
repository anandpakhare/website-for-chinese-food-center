// Menu data
const menuItems = {
    appetizers: [
        {
            name: "Dragon Dumplings",
            price: "Rs. 200",
            description: "Steamed pork and shrimp dumplings with ginger soy sauce",
            image: "images/dragon dumpling.webp"
        },
        {
            name: "Crispy Spring Rolls",
            price: "Rs. 200",
            description: "Fresh vegetables wrapped in crispy pastry",
            image: "images/spring-rolls.jpg"
        },
        {
            name: "Salt & Pepper Calamari",
            price: "rs. 300",
            description: "Tender squid with aromatic spices",
            image: "images/salt-paper-calmeri.jpg"
        }
    ],
    soups: [
        {
            name: "Hot & Sour Soup",
            price: "Rs. 150",
            description: "Traditional spicy and tangy soup with tofu",
            image: "images/Hot-Sour-Soup.jpg"
        },
        {
            name: "Wonton Soup",
            price: "Rs. 150",
            description: "Delicate wontons in clear broth",
            image: "images/chicken-soup.jpg"
        },
        {
            name: "Seafood Corn Soup",
            price: "Rs. 150",
            description: "Creamy soup with fresh seafood and sweet corn",
            image: "images/seafood-corn-soup.jpg"
        }
    ],
    mains: [
        {
            name: "Chicken tripal Rice",
            price: "Rs. 250",
            description: "Crispy duck served with pancakes and hoisin sauce",
            image: "images/tripal-rice.jpg"
        },
        {
            name: "Hakka Noodles",
            price: "Rs. 150",
            description: "Diced chicken with peanuts in spicy sauce",
            image: "images/hakka-noodles.jpg"
        },
        {
            name: "Dragon Fried Rice",
            price: "Rs. 150",
            description: "Crispy pork with bell peppers in tangy sauce",
            image: "images/dragon-rice.jpg"
        }
    ],
    noodles: [
        {
            name: "Dragon Fried Rice",
            price: "Rs. 150",
            description: "Signature fried rice with BBQ pork and prawns",
            image: "images/dragon-rice.jpg"
        },
        {
            name: "Beef Chow Mein",
            price: "Rs. 200",
            description: "Stir-fried noodles with tender beef and vegetables",
            image: " images/chawmin.jpg"
        },
        {
            name: "Singapore Rice Noodles",
            price: "Rs. 300",
            description: "Curry-flavored rice noodles with char siu",
            image: " images/singapura-rice-noodles.jpg"
        }
    ],
    desserts: [
        {
            name: "Mango Pudding",
            price: "$6.99",
            description: "Silky smooth mango pudding with fresh fruit",
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop"
        },
        {
            name: "Sesame Balls",
            price: "$7.99",
            description: "Deep-fried glutinous rice balls with red bean paste",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
        },
        {
            name: "Almond Tofu",
            price: "$5.99",
            description: "Delicate almond-flavored dessert",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
        }
    ]
};

// DOM elements
const header = document.getElementById('header');
const mobileNav = document.getElementById('mobile-nav');
const menuIcon = document.getElementById('menu-icon');
const menuGrid = document.getElementById('menu-grid');
const reservationForm = document.getElementById('reservation-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load initial menu
    changeCategory('appetizers');
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add form submit event listener
    if (reservationForm) {
        reservationForm.addEventListener('submit', handleReservationSubmit);
    }
});

// Handle scroll events
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    mobileNav.classList.toggle('show');
    
    // Change menu icon
    if (mobileNav.classList.contains('show')) {
        menuIcon.className = 'fas fa-times';
    } else {
        menuIcon.className = 'fas fa-bars';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (mobileNav.classList.contains('show')) {
        toggleMobileMenu();
    }
}

// Change menu category
function changeCategory(category) {
    // Update active button
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    const activeButton = document.querySelector(`[onclick="changeCategory('${category}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Update menu items
    const items = menuItems[category];
    if (items && menuGrid) {
        menuGrid.innerHTML = '';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <div class="menu-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-title">${item.name}</h3>
                        <span class="menu-item-price">${item.price}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                </div>
            `;
            menuGrid.appendChild(menuItem);
        });
    }
}

// Handle reservation form submission
function handleReservationSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.date || !data.time || !data.guests) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you for your reservation! We will contact you shortly to confirm.');
        event.target.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Add smooth scrolling for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
        });
    });
});

// Add intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .menu-item, .gallery-item, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && mobileNav.classList.contains('show')) {
        toggleMobileMenu();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Swipe up to close mobile menu
    if (diff > swipeThreshold && mobileNav.classList.contains('show')) {
        toggleMobileMenu();
    }
}

// Add form field validation
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Remove existing error styling
    field.classList.remove('error');
    
    // Validation rules
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required.';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    } else if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number.';
        }
    }
    
    // Apply error styling if invalid
    if (!isValid) {
        field.classList.add('error');
        field.style.borderColor = '#dc2626';
        
        // Show error message
        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.color = '#dc2626';
            errorElement.style.fontSize = '0.875rem';
            errorElement.style.marginTop = '0.25rem';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    } else {
        field.style.borderColor = '';
        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    return isValid;
} 