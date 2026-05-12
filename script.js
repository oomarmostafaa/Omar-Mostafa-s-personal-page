window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

// Social Icons Shift Effect (Refined)
window.shiftNextIcons = function(currentIcon) {
    const container = currentIcon.closest('.icons-container'); // Find the closest container
    if (!container) return;
    const icons = Array.from(container.querySelectorAll('.social-icon'));
    const currentIndex = icons.indexOf(currentIcon);

    const tooltip = currentIcon.querySelector('.tooltip');
    // Calculate shift distance based on tooltip width, if tooltip exists
    const shiftDistance = tooltip ? (tooltip.offsetWidth + 10) : 0;

    icons.forEach((icon, index) => {
        if (index > currentIndex) {
            icon.style.transform = `translateX(${shiftDistance}px)`;
        } else {
            icon.style.transform = 'translateX(0)';
        }
    });
}

window.resetIcons = function(currentIcon) {
    const container = currentIcon ? currentIcon.closest('.icons-container') : document.querySelector('.icons-container');
    if (!container) return;
    const icons = Array.from(container.querySelectorAll('.social-icon'));
    icons.forEach(icon => {
        icon.style.transform = 'translateX(0)';
    });
}





function typeEffect(element, text, speed, pause = 2000) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else {
            setTimeout(() => {
                element.textContent = '';
                i = 0;
                typing();
            }, pause);
        }
    }

    element.textContent = '';
    typing();
}







// Initialize enhanced animations
window.addEventListener('load', function() {
    const nameElement = document.querySelector('.name');
    setTimeout(() => {
        typeEffect('Omar Mostafa Mohamed', 200);
    }, 1000);


    // Animate social icons
    document.querySelectorAll('.social-icon').forEach((icon, index) => {
        icon.style.transform = 'translateY(20px)';
        icon.style.opacity = '0';
        setTimeout(() => {
            icon.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            icon.style.transform = 'translateY(0)';
            icon.style.opacity = '1';
        }, 2000 + (index * 100));
    });
});
// Add click particle effect
document.addEventListener('click', function(e) {
    if (Math.random() > 0.7) { // 30% chance
        if (typeof createInteractiveParticle === 'function') {
            createInteractiveParticle(e.clientX, e.clientY);
        }
    }
});

// Create floating particles
function createParticles() {
    const skillsSection = document.querySelector('.skills-section');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        skillsSection.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 300);
}

// Add interactive cursor effect
// Add smooth hover effects only
document.querySelectorAll('.skill-card').forEach(card => {
card.addEventListener('mouseenter', () => {
card.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
});

card.addEventListener('mouseleave', () => {
card.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
card.style.transform = '';
});
});

// Initialize particles
function initializeParticles() {
    const skillsSection = document.querySelector('.skills-section');
    if (!skillsSection) return;
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        skillsSection.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 300); // Create a new particle every 300ms
}

// --- Scroll Reveal Animation ---
const scrollReveal = () => {
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    // Apply to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal-hidden');
        observer.observe(section);
    });

    // Apply to cards (skills, projects, experience, education)
    document.querySelectorAll('.skill-card, .project-card, .experience-card, .education-card').forEach(card => {
        card.classList.add('reveal-hidden-card');
        observer.observe(card);
    });
};

// --- Navbar Hamburger Menu Toggle ---
const setupHamburgerMenu = () => {
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
};

// --- Initialize all scripts on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        typeEffect(nameElement, 'Omar Mostafa Mohamed', 120);
    }
    initializeParticles();
    scrollReveal();
    setupHamburgerMenu();
});
        

// Removed redundant observer call that was outside of scope
// The scrollReveal function already handles observing all cards

/* 
   Note: To see the site live online, you can upload these files to 
   GitHub and enable "GitHub Pages" in the repository settings. 
   This will give you a real URL (e.g., omar.github.io/portfolio) 
   to share in your LinkedIn profile.
*/
