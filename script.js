
/* =====================================
   FADHIL WEB STUDIO
   JAVASCRIPT INTERACTION
===================================== */

// KONFIGURASI WHATSAPP
const WHATSAPP_NUMBER = "6285175061704";

// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        menuToggle.textContent =
            navMenu.classList.contains("active") ? "✕" : "☰";
    });

    const navLinks = document.querySelectorAll("#navMenu a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuToggle.textContent = "☰";
        });
    });
}

// FORM CONTACT KE WHATSAPP
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const project = document.getElementById("project").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !project || !message) {
            alert("Mohon lengkapi semua formulir!");
            return;
        }

        const whatsappMessage =
            "Halo Fadhil Web Studio!\n\n" +
            "Nama: " + name + "\n" +
            "Email: " + email + "\n" +
            "Jenis Website: " + project + "\n\n" +
            "Pesan:\n" + message;

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.location.href = whatsappURL;
    });
}

// TOMBOL WHATSAPP LAINNYA
const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
    whatsappButton.addEventListener("click", function (event) {
        event.preventDefault();

        const message =
            "Halo Fadhil Web Studio! Saya tertarik membuat website.";

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);

        window.location.href = whatsappURL;
    });
}

// ANIMASI SCROLL
const observerOptions = {
    threshold: 0.12
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .price-card, .section-heading"
);

animatedElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

console.log("Fadhil Web Studio berhasil dijalankan!");
