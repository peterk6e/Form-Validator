const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");
const err = document.getElementById("error-message");

function register() {
    
  if (
    !checkRequired([userName, email, password, confirmedPassword]) &&
    checkEmail(email) &&
    checkName(userName) &&
    verifyPassword(password, confirmedPassword)
  ) {
    err.innerText = '';
    alert("Registration successful");
  }
}
// Check required fields
function checkRequired(arr) {
  let isRequired = false;
  for (let el of arr) {
    if (el.value.trim() === "") {
      showError(el, `${getFieldName(el)} is required`);
      isRequired = true;
    } else {
        showSuccess(el);
    }
  }
  return isRequired;
}

// Check name
function checkName(userName) {
  let nameVerification = false;
  const name = userName.value;
  if (name.length < 3) {
    showError(userName, "Name should be longer then 3 characters");
  } else {
    showSuccess(userName);
    nameVerification = true;
  }
  return nameVerification;
}

// Check email is valid
function checkEmail(email) {
  let emailVerification = false;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    showSuccess(email);
    emailVerification = true;
  } else {
    showError(email, "Email is not valid");
  }
  return emailVerification;
}

// Verify password
const verifyPassword = (password, confirmedPassword) => {
  const pwd = password.value;
  const confPwd = confirmedPassword.value;
  let passwordVerification = false;

  if (pwd.length < 3) {
    showError(password, "Password should be longer then 3 characters");
  } else if (confPwd.length < 3) {
    showError(password, "Password should be longer then 3 characters");
  } else if (pwd !== confPwd) {
    showError(password, "Passwords do not match");
  } else {
    showSuccess(password);
    showSuccess(confirmedPassword);
    passwordVerification = true;
  }
  return passwordVerification;
};

// Show validated fields
function showSuccess(inputField) {
  inputField.classList.remove("error");
  inputField.classList.add("success");
}

// Show fields with errors
function showError(inputField, message) {
  inputField.classList.remove("success");
  inputField.classList.add("error");
  err.innerText = message;
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }