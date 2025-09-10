// Show floating order button after 3 seconds
function showOrderButton() {
    const btn = document.getElementById('floatingOrderBtn');
    if (!btn) {
        console.error('Order button not found!');
        return;
    }

    // Force initial state
    btn.classList.add('invisible', 'opacity-0');
    btn.style.visibility = 'hidden';
    btn.style.opacity = '0';
    btn.style.transform = 'translate(100%, -50%)';

    // Show button after delay
    setTimeout(() => {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
        // Check if mobile
        if (window.innerWidth <= 768) {
            btn.style.transform = 'none';
        } else {
            btn.style.transform = 'translate(0, -50%)';
        }
    }, 10000); // 10 seconds

    // Optional: Add hover effect
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translate(-5px, -50%) scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, -50%) scale(1)';
    });
}

// Initialize button when DOM is ready
document.addEventListener('DOMContentLoaded', showOrderButton);