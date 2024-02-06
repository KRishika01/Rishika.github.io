
function toggleMode() {

    document.body.classList.toggle("dark-mode");

    // Toggle mode for specific elements (adjust as needed)
    document.querySelectorAll(".menu, h2, section").forEach(element => {
        element.classList.toggle("dark-mode");
    });

    // Toggle mode for the button itself (optional)
    const toggleModeButton = document.getElementById("toggleModeButton");
    toggleModeButton.classList.toggle("dark-mode-button");

    // Save the current mode to local storage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

function loadMode() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        toggleMode();
    }
}

loadMode();


function openBlog1(blogId) {
    window.open(`blog1.html?blogId=${blogId}`, '_blank');
}

function openBlog2(blogId) {
    window.open(`blog2.html?blogId=${blogId}`, '_blank');
}


