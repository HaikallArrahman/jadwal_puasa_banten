document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("main-image");

    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Removed animation class addition
    // Removed zoom functionality

    image.addEventListener("click", function() {
        if (isMobile()) {
            return; // Disable zoom on mobile devices
        }
        // Removed zoom toggle
    });

    // Removed subtitles data and functionality
});
