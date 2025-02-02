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

// Toggle Active Specialist Card
function toggleCard(element) {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("active"));
    element.classList.add("active");
}

// Smooth Scrolling and Active Header
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });

        document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});
