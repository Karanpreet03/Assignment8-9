// Created By: Karanpreet Sachdeva
// ID: C0884994
// Program logic for the registration form
function validateForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let dob = document.getElementById("dateOfBirth").value;
  let gender = document.querySelector("input[name='gender']:checked");
  let courseSelector = document.querySelector("select[name='courseList']");
  let semSelector = document.querySelector("select[name='sem']");

  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !gender ||
    !password ||
    !confirmPassword ||
    !courseSelector ||
    !semSelector
  ) {
    alert("Please fill the fields completely");
    return;
  }
  if (password !== confirmPassword) {
    alert("Password not match");
    return;
  } else {
    alert("Registration Successful!");
  }
}
