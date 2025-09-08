// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            hamburgerMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking anywhere else
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            hamburgerMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    hamburgerMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                message: document.getElementById('message').value.trim(),
                service: document.getElementById('service').value
            };
            
            // Basic form validation
            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // In a real website, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Add fixed header on scroll
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
