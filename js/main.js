// ============================================================================
// MOBILE MENU TOGGLE
// ============================================================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================================================
// NAVBAR SCROLL EFFECT
// ============================================================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================================================
// SMOOTH SCROLL BEHAVIOR FOR NAVIGATION LINKS
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe sections and cards
document.querySelectorAll('.section, .card, .participation-card').forEach(el => {
    el.classList.add('scroll-fade');
    observer.observe(el);
});

// ============================================================================
// CARD HOVER ANIMATION
// ============================================================================

document.querySelectorAll('.card[data-animate="true"]').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================================================
// PARALLAX EFFECT FOR HERO SHAPES (Optional subtle effect)
// ============================================================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.artistic-shape');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed * 0.05}px)`;
    });
});

// ============================================================================
// LAZY LOAD IMAGES (if added in future)
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// SCROLL-TO-TOP INDICATOR
// ============================================================================

// Optional: Add visual feedback when page loads
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ============================================================================
// FORM SUBMISSION (if contact form is added)
// ============================================================================

// Placeholder for future contact form functionality
const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form handling logic here
};

// ============================================================================
// UTILITY: CLICK OUTSIDE TO CLOSE MOBILE MENU
// ============================================================================

document.addEventListener('click', (e) => {
    const isClickInsideNav = navbar.contains(e.target);
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickInsideHamburger = hamburger.contains(e.target);
    
    if (!isClickInsideNav && !isClickInsideMenu && !isClickInsideHamburger && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================================================
// PERFORMANCE: Debounce scroll events
// ============================================================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================================================
// CONSOLE MESSAGE
// ============================================================================

console.log('%cLa Compagnia dell\'Arte APS', 'font-size: 18px; font-weight: bold; color: #D4734F;');
console.log('%cSadali, Sardegna', 'font-size: 14px; color: #2B8A99;');
console.log('Benvenuto! Welcome!');
