const usernameInput = document.getElementById('username');
usernameInput.addEventListener('blur', validateUsername);
function validateUsername() {
  const username = usernameInput.value.trim();
  const regex = /^[a-zA-Z0-9._-]{3,}$/; // regular expression to match username format
  if (!regex.test(username)) {
    usernameInput.classList.add('invalid');
    usernameInput.setCustomValidity('Username must contain at least 3 characters, only letters, numbers, underscores, periods, and dashes are allowed');
  } else {
    usernameInput.classList.remove('invalid');
    usernameInput.setCustomValidity('');
  }
}

const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', validatePassword);
function validatePassword() {
  const password = passwordInput.value.trim();
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; // regular expression to match password format
  if (!regex.test(password)) {
    passwordInput.classList.add('invalid');
    passwordInput.setCustomValidity('Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number');
  } else {
    passwordInput.classList.remove('invalid');
    passwordInput.setCustomValidity('');
  }
  
  // check password strength and set the input background color accordingly
  if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    passwordInput.style.backgroundColor = 'green';
  } else if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
    passwordInput.style.backgroundColor = 'orange';
  } else {
    passwordInput.style.backgroundColor = 'red';
  }
}
