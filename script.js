
/* =====================================
   FADHIL WEB STUDIO
   JAVASCRIPT INTERACTION
===================================== */

// KONFIGURASI WHATSAPP
// Ganti nomor di bawah dengan nomor WhatsApp kamu.
// Gunakan kode negara 62 tanpa tanda +.

const WHATSAPP_NUMBER = "6285175061704";

// MENU NAVIGASI MOBILE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// TUTUP MENU SETELAH LINK DIKLIK
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// WHATSAPP CONTACT
const whatsappButton = document.getElementById("whatsappButton");

whatsappButton.addEventListener("click", function (event) {
    event.preventDefault();

    const message = `
Halo Fadhil Web Studio!

Saya tertarik menggunakan jasa pembuatan website.

Saya ingin mengetahui informasi lebih lanjut mengenai:
- Jenis website
- Paket harga
- Proses pengerjaan

Mohon informasi lebih lanjut. Terima kasih!
    `;

    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

// ANIMASI SAAT SCROLL
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

// TAHUN FOOTER OTOMATIS
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() +
        " Fadhil Web Studio. All Rights Reserved.";
}

console.log("Fadhil Web Studio berhasil dijalankan!");
