window.addEventListener('load', function () {
    const preloader = document.getElementById('salon-preloader');
    if (preloader) {
      // Step 1: Smooth fade out opacity
      preloader.classList.add('opacity-0', 'pointer-events-none');
      
      // Step 2: Remove completely from layout tree after transition finishes
      setTimeout(() => {
        preloader.remove();
      }, 1000); // Matches the 'duration-1000' Tailwind class
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('salon-preloader');
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    // Set up the observer configuration
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Removes the class when scrolling away so it fires "on every scroll"
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.12, // Triggers when 12% of the section is visible
        rootMargin: "0px 0px -40px 0px" // Slight offset for a cleaner feeling
    });

    // Handle Preloader Fade-out & initialization
    window.addEventListener('load', () => {
        if (preloader) {
            preloader.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000); 
        }
        
        // Start watching the elements ONLY after the window has loaded
        scrollElements.forEach(el => elementObserver.observe(el));
    });
});