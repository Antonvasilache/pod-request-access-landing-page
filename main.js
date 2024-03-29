const form = document.querySelector(".content-form");
const input = document.querySelector(".content-input");
const error = document.querySelector(".content-error");
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (e) => {
  e.preventDefault();
  const email = input.value;
  const isValid = emailRegEx.test(email);

  if (!isValid) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    input.value = "";
  }
};

form.addEventListener("submit", validateEmail);
