const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");
const err = document.getElementById("error-message");

function register() {
  if(verifyPassword(password, confirmedPassword) &&
  checkEmail(email) &&
  checkName(userName)) {
      alert("Registration successful");
  }
}

// Check name
function checkName(userName) {
  let nameVerification = false;
  const name = userName.value;
  if (name == null || name == undefined || name.length < 3) {
    showError(userName, "name is not valid");
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

  if (pwd == null || pwd == undefined || pwd.length < 3) {
    showError(password, "password is not valid");
  } else if (confPwd == null || confPwd == undefined || confPwd.length < 3) {
    showError(password, "password is not valid");
  } else if (pwd !== confPwd) {
    showError(password, "Passwords do not match");
  } else {
    showSuccess(password);
    showSuccess(confirmedPassword);
    passwordVerification = true;
  }
  return passwordVerification;
};

function showSuccess(inputField) {
  inputField.classList.remove("error");
  inputField.classList.add("success");
}

function showError(inputField, message) {
  inputField.classList.remove("success");
  inputField.classList.add("error");
  err.innerText = message;
}
