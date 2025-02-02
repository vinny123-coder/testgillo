// Toggle Active Card
function toggleCard(element) {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("active"));
    element.classList.add("active");
}

// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
