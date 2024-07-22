let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Wait for the page to load before hiding the splash screen
window.addEventListener('load', function () {
    setTimeout(function () {
        var splashScreen = document.getElementById('splash-screen');
        splashScreen.style.opacity = '0';
        setTimeout(function () {
            splashScreen.style.display = 'none';
        }, 500); // Fade out duration (milliseconds)
    }, 2000); // Splash screen display duration (milliseconds)
});

function logout() {
    sessionStorage.clear();
    window.location.href = 'index.html';
}