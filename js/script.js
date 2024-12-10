document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to HopHelper!");
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to manage sticky header
    const manageStickyHeader = () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("sticky-header");
        } else {
            header.classList.remove("sticky-header");
        }
    };

    // Shrink header on scroll and on initial load
    window.addEventListener("scroll", manageStickyHeader);
    manageStickyHeader();  // Ensure correct state on page load

    // Dropdown functionality for "Features"
    const featuresMenu = document.querySelector("li > a[href='#']");
    const dropdownMenu = featuresMenu.nextElementSibling;

    // Show dropdown on mouseover and hide on mouseout
    featuresMenu.parentElement.addEventListener("mouseover", () => {
        dropdownMenu.style.display = "block";
    });

    featuresMenu.parentElement.addEventListener("mouseout", () => {
        dropdownMenu.style.display = "none";
    });

    // To keep dropdown open if hovering over dropdown itself
    dropdownMenu.addEventListener("mouseover", () => {
        dropdownMenu.style.display = "block";
    });

    dropdownMenu.addEventListener("mouseout", () => {
        dropdownMenu.style.display = "none";
    });
});


if (document.querySelectorAll('.faq-question').length > 0) {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.querySelector('span:last-child').textContent = answer.style.display === 'block' ? '-' : '+';
        });
    });
}