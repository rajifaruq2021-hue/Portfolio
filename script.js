document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple alert for the CTA button
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', () => {
        alert("Thanks for your interest! More info coming soon.");
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // In a real-world scenario, you would send this data to a server
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation and feedback
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset(); // Reset the form after submission
        } else {
            alert("Please fill out all fields.");
        }
    });

});
