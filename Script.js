// Loading Screen Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    document.body.style.overflow = 'hidden'; // Prevent scrolling during load

    // Hide loading screen when everything is loaded
    function hideLoading() {
        document.body.classList.add('loaded');
        document.body.style.overflow = ''; // Restore scrolling
        
        // Remove loading screen after fade out completes
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }

    // Wait for window load or timeout
    const loadPromise = new Promise((resolve) => {
        window.addEventListener('load', resolve);
        
        // Fallback timeout if load event doesn't fire
        setTimeout(resolve, 3000);
    });

    // Minimum show time of 1.5 seconds
    setTimeout(() => {
        loadPromise.then(hideLoading);
    }, 1500);
});

// Smooth scroll for all links with .smooth-scroll class
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Game card hover effects
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    });
});