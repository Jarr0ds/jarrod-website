const newsletterForm = document.getElementById("newsletterForm");

const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");

const topicCheckboxes = document.querySelectorAll(
    '#checkbox-fieldset input[type="checkbox"]:not(#select-all-checkbox)'
);

const selectAllCheckbox = document.getElementById("select-all-checkbox");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
        alert("Thank you for signing up to the newsletter!");
        newsletterForm.reset();
    }
});

function validateForm() {
    let isValid = true;

    clearErrors();

    if (!isValidName(firstNameInput.value)) {
        showError(firstNameInput, "First name must be at least 2 characters and contain letters only.");
        isValid = false;
    }

    if (!isValidName(lastNameInput.value)) {
        showError(lastNameInput, "Last name must be at least 2 characters and contain letters only.");
        isValid = false;
    }

    if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
    }

    if (!isAgeSelected()) {
        showFieldsetError("age-fieldset", "Please select an age range.");
        isValid = false;
    }

    if (!isTopicSelected()) {
        showFieldsetError("checkbox-fieldset", "Please select at least one newsletter topic.");
        isValid = false;
    }

    return isValid;
}

function isValidName(name) {
    const namePattern = /^[A-Za-z\s'-]{2,}$/;
    return namePattern.test(name.trim());
}

function isValidEmail(email) {
    return email.trim() !== "" && emailInput.checkValidity();
}

function isAgeSelected() {
    return document.querySelector('input[name="age"]:checked') !== null;
}

function isTopicSelected() {
    return Array.from(topicCheckboxes).some((checkbox) => checkbox.checked);
}


function showError(inputElement, message) {
    inputElement.classList.add("form-input--error");

    const errorMessage = document.createElement("p");
    errorMessage.className = "form-error";
    errorMessage.textContent = message;

    inputElement.insertAdjacentElement("afterend", errorMessage);
}

function showFieldsetError(fieldsetId, message) {
    const fieldset = document.getElementById(fieldsetId);

    const errorMessage = document.createElement("p");
    errorMessage.className = "form-error";
    errorMessage.textContent = message;

    fieldset.appendChild(errorMessage);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".form-error");

    errorMessages.forEach((error) => {
        error.remove();
    });

    const invalidInputs = document.querySelectorAll(".form-input--error");

    invalidInputs.forEach((input) => {
        input.classList.remove("form-input--error");
    });
}

selectAllCheckbox.addEventListener("change", () => {
    topicCheckboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

topicCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        selectAllCheckbox.checked = Array.from(topicCheckboxes)
            .every((checkbox) => checkbox.checked);
    });
});