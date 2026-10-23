function updateDateTime() {
    const timeDisplay = document.getElementById("live-datetime");
    if (!timeDisplay) return;

    const now = new Date();
    timeDisplay.textContent = now.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "medium"
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();

const themeButton = document.getElementById("change-bg-btn");
if (themeButton) {
    const colors = ["#faf5ee", "#f0f4f1", "#fdf6e2", "#f5e6d3", "#e8eff5"];
    let colorIndex = 0;

    themeButton.addEventListener("click", function () {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
}

const openModalBtn = document.getElementById("open-popup-btn");
const closeModalBtn = document.getElementById("close-popup-btn");
const popupModal = document.getElementById("popup-modal");
const popupForm = document.getElementById("popup-form");

if (openModalBtn && popupModal) {
    openModalBtn.addEventListener("click", function () {
        popupModal.style.display = "flex";
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", function () {
            popupModal.style.display = "none";
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    });

    if (popupForm) {
        popupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent.");
            popupForm.reset();
            popupModal.style.display = "none";
        });
    }
}

const accordionQuestions = document.querySelectorAll(".accordion-question");
accordionQuestions.forEach(function (button) {
    button.addEventListener("click", function () {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains("open");

        document.querySelectorAll(".accordion-answer").forEach(function (p) {
            p.classList.remove("open");
        });

        if (!isOpen) {
            answer.classList.add("open");
        }
    });
});

const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("user-name");
        const email = document.getElementById("user-email");
        const password = document.getElementById("user-password");
        const confirmPassword = document.getElementById("user-confirm-password");
        const errorMsg = document.getElementById("form-error-msg");
        const successMsg = document.getElementById("form-success-msg");

        errorMsg.textContent = "";
        successMsg.textContent = "";

        if (name.value.trim() === "") {
            errorMsg.textContent = "Please enter your full name.";
            return;
        }

        if (email.value.trim() === "") {
            errorMsg.textContent = "Please enter your email.";
            return;
        }

        if (!email.value.includes("@") || !email.value.includes(".")) {
            errorMsg.textContent = "Please enter a valid email address.";
            return;
        }

        if (password.value.length < 8) {
            errorMsg.textContent = "Password must be at least 8 characters long.";
            return;
        }

        if (password.value !== confirmPassword.value) {
            errorMsg.textContent = "Passwords do not match.";
            return;
        }

        successMsg.textContent = "Booking form successfully validated and sent!";
        bookingForm.reset();
    });
}