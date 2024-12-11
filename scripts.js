
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("entry-form");
    const submitButton = document.getElementById("submit-button");
    const phoneInput = document.getElementById("phone");

    // Phone mask
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value
            .replace(/\D/g, "")
            .replace(/^(\d{3})(\d{3})?(\d{4})?/, (match, g1, g2, g3) => {
                let result = `(${g1})`;
                if (g2) result += ` ${g2}`;
                if (g3) result += `-${g3}`;
                return result;
            });
    });

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);

        fetch("https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar", {
            method: "POST",
            body: data,
        })
            .then((response) => {
                if (response.ok) {
                    submitButton.textContent = "Submitted";
                    submitButton.disabled = true;
                } else {
                    alert("An error occurred while submitting the form.");
                }
            })
            .catch(() => {
                alert("Failed to submit. Please try again.");
            });
    });
});
