function adminLogin() {
  const adminId = document.getElementById("adminId").value;
  const adminPassword = document.getElementById("adminPassword").value;

  if (adminId === "AZYRHWQ8NMkL" && adminPassword === "888888") {
    localStorage.setItem("isAdmin", "true"); // Store admin session
    alert("Admin Login Successful!");
    window.location.href = "results.html"; // Redirect to Results Page
  } else {
    alert("Invalid Admin Credentials!");
  }
}
