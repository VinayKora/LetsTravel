document.addEventListener('DOMContentLoaded', function() {
    var btns = document.querySelectorAll('.nav-btn');
    var slides = document.querySelectorAll('.video-slide');
    var contents = document.querySelectorAll('.content');
    var homeSection = document.querySelector('.home');
    var currentSlide = 0; // Track the current slide index

    // Function to update the active slide and background image
    var updateSlide = function(index) {
        // Remove 'active' class from all buttons, slides, and contents
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        contents.forEach((content) => {
            content.classList.remove('active');
        });

        // Add 'active' class to the current button, slide, and content
        btns[index].classList.add('active');
        slides[index].classList.add('active');
        contents[index].classList.add('active');

        // Change the background image of the .home section
        homeSection.style.backgroundImage = `url('${bgImages[index]}')`;
    };

    // Array of background images for each slide
    var bgImages = [
        './Ladakh.jpg',
        './camping.jpg',
        './Adventure.jpg',
        './roadtrip.jpg',
        './nature.jpg',
        // Add more paths as needed
    ];

    // Event listeners for navigation buttons
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(index);
        });
    });

    // Arrow key navigation functionality
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide(currentSlide);
        } else if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlide(currentSlide);
        }
    });

    // Event listener for Home link to navigate to the first slide
    const homeLink = document.getElementById("home-link"); // Updated to add event listener
    homeLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        currentSlide = 0; // Set the current slide to the first slide
        updateSlide(0); // Navigate to the first slide
    });
    const contactLink = document.getElementById("contact-link");
    const contactInfo = document.getElementById("contact-info");
    contactLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        contactInfo.classList.toggle("hidden"); // Toggle visibility of contact info
    });
});
