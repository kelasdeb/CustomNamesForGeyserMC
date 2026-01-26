document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.menu li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show success message
            alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan menghubungi Anda di ${email} segera.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Simulate loading content for demonstration
    console.log('Blog loaded successfully!');
});