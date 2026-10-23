// --- Task 5: Display Current Date and Time ---
function updateDateTime() {
    const timeDisplay = document.getElementById("live-datetime");
    if (!timeDisplay) return;

    const now = new Date();
    // Readable format: "Month Day, Year, HH:MM:SS AM/PM"
    timeDisplay.textContent = now.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "medium"
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// --- Task 4: Change Background Color ---
const themeButton = document.getElementById("change-bg-btn");
if (themeButton) {
    const colors = ["#faf5ee", "#f0f4f1", "#fdf6e2", "#f5e6d3", "#e8eff5"];
    let colorIndex = 0;

    themeButton.addEventListener("click", function () {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
}

// --- Task 3: Popup Contact Form ---
const openModalBtn = document.getElementById("open-popup-btn");
const closeModalBtn = document.getElementById("close-popup-btn");
const popupModal = document.getElementById("popup-modal");
const popupForm = document.getElementById("popup-form");

if (openModalBtn && popupModal) {
    // Open modal
    openModalBtn.addEventListener("click", function () {
        popupModal.style.display = "flex";
    });

    // Close button
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function () {
            popupModal.style.display = "none";
        });
    }

    // Close when clicking outside of the form
    window.addEventListener("click", function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });

    // Simple submit message
    if (popupForm) {
        popupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            popupForm.reset();
            popupModal.style.display = "none";
        });
    }
}

// --- Task 2: Accordion for FAQs ---
const accordionQuestions = document.querySelectorAll(".accordion-question");
accordionQuestions.forEach(function (button) {
    button.addEventListener("click", function () {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains("open");

        // Close all accordion panels
        document.querySelectorAll(".accordion-answer").forEach(function (p) {
            p.classList.remove("open");
        });

        // Toggle open if it was closed
        if (!isOpen) {
            answer.classList.add("open");
        }
    });
});

// --- Task 1: Form Validation ---
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get inputs
        const name = document.getElementById("user-name");
        const email = document.getElementById("user-email");
        const password = document.getElementById("user-password");
        const confirmPassword = document.getElementById("user-confirm-password");
        const errorMsg = document.getElementById("form-error-msg");
        const successMsg = document.getElementById("form-success-msg");

        // Clear previous messages
        errorMsg.textContent = "";
        successMsg.textContent = "";

        // Check required fields
        if (name.value.trim() === "") {
            errorMsg.textContent = "Please enter your full name.";
            return;
        }

        if (email.value.trim() === "") {
            errorMsg.textContent = "Please enter your email.";
            return;
        }

        // Email format check (must have @ and .)
        if (!email.value.includes("@") || !email.value.includes(".")) {
            errorMsg.textContent = "Please enter a valid email address.";
            return;
        }

        // Password length check (min 8 chars)
        if (password.value.length < 8) {
            errorMsg.textContent = "Password must be at least 8 characters long.";
            return;
        }

        // Password confirmation check
        if (password.value !== confirmPassword.value) {
            errorMsg.textContent = "Passwords do not match.";
            return;
        }

        // If everything is valid
        successMsg.textContent = "Booking form successfully validated and sent!";
        bookingForm.reset();
    });
}