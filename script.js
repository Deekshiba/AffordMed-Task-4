document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
            }
        });
    });
    const donationForm = document.getElementById('donation-form');
    const message = document.getElementById('donation-message');
    if (donationForm && message) {
        donationForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            if (name && email) {
                message.style.display = 'block';
                setTimeout(() => {
                    message.scrollIntoView({ behavior: 'smooth' });
                }, 100); 

                donationForm.reset();
            }
        });
    }
});

