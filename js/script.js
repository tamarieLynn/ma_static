let index = 0;
const images = document.querySelectorAll('.carousel-item');
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

showImage(index);
