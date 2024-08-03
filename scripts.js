document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    navToggle.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.transition = "max-height 2s ease, opacity 1s ease"; // Smooth transition for collapsing
            navLinks.style.maxHeight = '0';
            navLinks.style.opacity = '0';
            setTimeout(() => {
                navLinks.style.display = 'none';
            }, 2000); // Delay hiding the display until the transition ends
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.alignItems = 'flex-start';
            navLinks.style.marginTop = '10px';
            navLinks.style.transition = "max-height 2s ease, opacity 1s ease"; // Smooth transition for expanding
            navLinks.style.maxHeight = '500px'; // Set a maximum height for transition
            navLinks.style.opacity = '1';
        }
    });
});
