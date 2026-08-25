// White Mode
const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.className = "fa-solid fa-circle-half-stroke";
    } else {
        icon.className = "fa-regular fa-circle";
    }
});

// Contact Form
(function () {
    emailjs.init("gMnnaU1ifRxqE0idA");
})();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = contactForm.querySelector("button");
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Sending...";

    emailjs.sendForm('service_sy90c1i', 'template_1v6qjur', this)
        .then(function () {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset();
            submitBtn.innerText = originalBtnText;
        }, function (error) {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", error);
            submitBtn.innerText = originalBtnText;
        });
});


// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.05)";
    }

});