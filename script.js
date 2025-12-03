// ================================
// 1. Navbar shrink on scroll
// ================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

// Optional CSS for navbar-shrink
// Add this in styles.css
/*
.navbar-shrink {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    transition: all 0.3s;
}
*/

// ================================
// 2. Smooth scroll for internal links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// 3. Form Validation
// ================================
const contactForm = document.querySelector('form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if(!name || !email || !message) {
            alert("Please fill in all fields before submitting!");
        } else {
            alert(`Thank you ${name}! Your message has been sent.`);
            contactForm.reset();
        }
    });
}

// ================================
// 4. Welcome Alert (Homepage)
// ================================
if(document.body.classList.contains('homepage')) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            alert("Welcome to Vishal's Webpage! Explore the portfolio and feel free to contact me.");
        }, 500);
    });
}

// ================================
// 5. Dynamic Year in Footer
// ================================
const yearSpan = document.querySelector('#currentYear');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
