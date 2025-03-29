function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Email or Password!");
  }
}

function goToAdminLogin() {
  window.location.href = "admin-login.html"; // Redirect to Admin Login Page
}
