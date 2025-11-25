// Loading Screen Functionality (Simplified - no asset waiting)
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;
    
    document.body.style.overflow = 'hidden';

    // Show loading screen for minimum 1.5 seconds for visual polish
    setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.style.overflow = '';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500); // Fade-out duration
    }, 1500);
});

// Smooth scroll for all links with .smooth-scroll class
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
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
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Game card hover effects
document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--glow-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--glow-y', `${e.clientY - rect.top}px`);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (!navToggle || !mainNav) return;

  // Toggle function
  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mainNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    // Prevent body scroll when menu open (optional)
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navToggle.addEventListener('click', toggleMenu);

  // Close menu when a nav link is clicked (mobile)
  mainNav.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link') && mainNav.classList.contains('open')) {
      toggleMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      toggleMenu();
    }
  });
});
