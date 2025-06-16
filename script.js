window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
function shiftNextIcons(currentIcon) {
const container = document.getElementById('icons-container');
const icons = Array.from(container.querySelectorAll('.social-icon'));
const currentIndex = icons.indexOf(currentIcon);

const tooltip = currentIcon.querySelector('.tooltip');
const shiftDistance = tooltip.offsetWidth + 10 + 'px';

icons.forEach((icon, index) => {
if (index > currentIndex) {
icon.style.setProperty('--shift-distance', shiftDistance);
icon.classList.add('shifted');
} else {
icon.classList.remove('shifted');
icon.style.removeProperty('--shift-distance');
}
});
}
function resetIcons() {
const container = document.getElementById('icons-container');
const icons = Array.from(container.querySelectorAll('.social-icon'));
icons.forEach(icon => {
icon.classList.remove('shifted');
icon.style.removeProperty('--shift-distance');
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
        typeEffect(nameElement, 'Omar Mostafa Mohamed', 120);
    }, 500);


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
        createInteractiveParticle(e.clientX, e.clientY);
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
createParticles();

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

