// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll and change background color on navigation link click
document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Smooth scroll
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Change background color of the section
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
    });
});
