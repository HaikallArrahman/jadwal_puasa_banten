document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("main-image");
    const audio = document.getElementById("background-sound");

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

    // Ensure audio plays automatically
    audio.play().catch(error => {
        console.log("Audio playback failed:", error);
    });
});
