// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('property-form');
    const formMessage = document.getElementById('form-message');

    // Add the visible class to trigger the fade-in effect
    form.classList.add('visible');

    // Form Validation and Submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const title = document.getElementById('property-title').value;
        const type = document.getElementById('property-type').value;
        const location = document.getElementById('property-location').value;
        const price = document.getElementById('property-price').value;
        const description = document.getElementById('property-description').value;
        const image = document.getElementById('property-image').files[0];

        // Validate that all fields are filled
        if (title && type && location && price && description && image) {
            // Simulate successful submission
            formMessage.textContent = "Property successfully listed!";
            formMessage.style.color = "green";

            // Reset the form
            form.reset();
        } else {
            formMessage.textContent = "Please fill out all fields!";
            formMessage.style.color = "red";
        }
    });
});