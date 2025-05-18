// Loading Screen Functionality - Optimized for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (!loadingScreen) return;
    
    document.body.style.overflow = 'hidden';

    // List of critical assets to wait for
    const criticalAssets = [
        './images/game1.png',
        './images/game2.png',
        './images/zombie-survival.png',
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@300;500;700&display=swap'
    ];

    function hideLoading() {
        if (!document.body.classList.contains('loaded')) {
            document.body.classList.add('loaded');
            document.body.style.overflow = '';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }
    }

    function checkAssetsLoaded() {
        let loadedCount = 0;
        
        if (criticalAssets.length === 0) {
            hideLoading();
            return;
        }

        criticalAssets.forEach(asset => {
            if (asset.includes('fonts.googleapis.com')) {
                document.fonts.ready.then(() => {
                    loadedCount++;
                    if (loadedCount === criticalAssets.length) hideLoading();
                });
                return;
            }

            const img = new Image();
            img.src = asset;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === criticalAssets.length) hideLoading();
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === criticalAssets.length) hideLoading();
            };
        });

        // Final fallback timeout
        setTimeout(hideLoading, 5000);
    }

    // Start checking after slight delay
    setTimeout(checkAssetsLoaded, 300);
    
    // Original event listeners as fallback
    window.addEventListener('load', hideLoading);
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