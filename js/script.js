let index = 0;
const images = document.querySelectorAll('.frame-container');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function showImage(n) {
    images.forEach((img, i) => img.classList.toggle('active', i === n));
}

prev.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

next.addEventListener('click', () => {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});

// Touch support for mobile swiping
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.querySelector('.carousel').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance to trigger action
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left (Next)
        index = (index < images.length - 1) ? index + 1 : 0;
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right (Previous)
        index = (index > 0) ? index - 1 : images.length - 1;
    }
    showImage(index);
}

// Initialize first image
showImage(index);
