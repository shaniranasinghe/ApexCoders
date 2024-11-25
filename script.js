// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Animation
const heroText = document.querySelector('.hero h1');
const greetings = ["Building Modern Web Experiences", "Crafting Tailored Solutions", "Innovating the Web World"];
let greetingIndex = 0;

setInterval(() => {
    heroText.textContent = greetings[greetingIndex];
    greetingIndex = (greetingIndex + 1) % greetings.length;
}, 3000);
