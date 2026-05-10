// Simple script for smooth scrolling to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add some dynamic content, like current date
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.createElement('p');
    dateElement.textContent = 'Today is ' + new Date().toLocaleDateString();
    document.querySelector('#home p').appendChild(dateElement);
});