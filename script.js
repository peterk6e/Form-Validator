const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm-password");

function register() {
  // checkEmail(email);
  // verifyPassword(password, confirmedPassword);
  checkName(userName);
}

// Check name
function checkName(userName) {
  const name = userName.value;
  if (name == null || name == undefined || name.length < 3) {
    console.log("name is not ok");
    //showError(name, "name is not valid");
  } else {
    console.log("name is ok");
    //showSuccess(email);
  }
}

// Check email is valid
function checkEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    console.log("email ok");
    //showSuccess(email);
  } else {
    console.log("email not ok");
    //showError(email, "Email is not valid");
  }
}

// Verify password
const verifyPassword = (password, confirmedPassword) => {
  let pwd = password.value;
  let confPwd = confirmedPassword.value;

  if (pwd == null || pwd == undefined || pwd.length < 3) {
    console.log("password not valid");
    // showError(password, "password is not valid")
  } else if (confPwd == null || confPwd == undefined || confPwd.length < 3) {
    console.log("conf pwd not valid");
    // showError(password, "password is not valid")
  } else if (pwd !== confPwd) {
    console.log("password do not match");
    // showError(password, "Passwords do not match")
  } else {
    console.log("password is ok");
    //showSuccess(password);
  }
};
