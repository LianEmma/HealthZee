let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0;
const slideInterval = 5000; // Interval between slides in milliseconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlideIndex = index;
}

function nextSlide() {
    showSlide((currentSlideIndex + 1) % slides.length);
}

function prevSlide() {
    showSlide((currentSlideIndex - 1 + slides.length) % slides.length);
}

function currentSlide(index) {
    showSlide(index);
}

// Event listeners for navigation buttons
document.querySelector('.nav.next').addEventListener('click', nextSlide);
document.querySelector('.nav.prev').addEventListener('click', prevSlide);

// Event listeners for pagination dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index));
});

// Auto slide functionality
setInterval(nextSlide, slideInterval);
