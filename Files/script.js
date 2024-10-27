// Smooth scrolling for anchor links
function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
let percentage = 0;
const progressBar = document.querySelector('.progress');
const percentageText = document.querySelector('.percentage');

const loadingInterval = setInterval(() => {
    if (percentage < 100) {
        percentage++;
        percentageText.textContent = percentage + '%';
        progressBar.style.width = percentage + '%';
    } else {
        clearInterval(loadingInterval);
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';

        }, 500);
    }
}, 30);

});

// Dark/Light mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    document.body.style.backgroundColor = isDarkMode ? '#1a202c' : '#f8fafc'; // Dark/Light background
    document.body.style.color = isDarkMode ? '#edf2f7' : '#2d3748'; // Dark/Light text
}

// Alert on link click (for demonstration purposes)
function enableLinkAlerts() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            alert(`You clicked on: ${link.textContent}`);
        });
    });
}

// Initialize functionalities
function init() {
    enableSmoothScrolling();
    enableLinkAlerts();

    const toggleModeBtn = document.getElementById('toggle-mode');
    if (toggleModeBtn) {
        toggleModeBtn.addEventListener('click', toggleDarkMode);
    }
}

// Execute initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', init);