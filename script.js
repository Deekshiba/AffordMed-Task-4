document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            navLinks.scrollIntoView({ behavior: "smooth" });
        });
    } else {
        console.error("Menu toggle or nav links element not found!");
    }

    const donationForm = document.getElementById("donation-form");

    if (donationForm) {
        donationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;

            if (name && email) {
                const message = document.getElementById("donation-message");
                message.style.display = "block";
                message.scrollIntoView({ behavior: "smooth" });
                donationForm.reset();
            }
        });
    } else {
        console.error("Donation form not found!");
    }
});
