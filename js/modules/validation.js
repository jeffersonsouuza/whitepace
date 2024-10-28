function checkValidity(id, searchTerm, message) {
  const elemento = document.getElementById(id);
  const errorMessageId = `${id}-error`;
  let isValid = false;

  if (id === "email") {
    isValid = elemento.value.includes(searchTerm) && elemento.checkValidity();
  } else if (id === "password") {
    isValid = elemento.value.length >= 8;
  }

  elemento.style.borderColor = isValid ? "green" : "red";
  updateAlert(elemento, message, isValid, errorMessageId);
  checkFormValidity();
}

function updateAlert(elemento, message, isValid, errorMessageId) {
  let errorMessage = document.getElementById(errorMessageId);

  if (!isValid) {
    if (!errorMessage) {
      errorMessage = document.createElement("span");
      errorMessage.id = errorMessageId;
      errorMessage.classList.add("error-message");
      errorMessage.textContent = message;
      elemento.insertAdjacentElement("afterend", errorMessage);
    }
  } else if (errorMessage) {
    errorMessage.remove();
  }
}

function checkFormValidity() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const submitButton = document.querySelector(".login-submit");

  if (
    email.style.borderColor === "green" &&
    password.style.borderColor === "green"
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

export default checkValidity;
