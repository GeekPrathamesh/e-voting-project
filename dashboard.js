if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("You must log in first!");
  window.location.href = "index.html";
}

document.getElementById(
  "welcomeMessage"
).innerText = `Hello, ${localStorage.getItem("name")}`;

function vote(candidate) {
  let email = localStorage.getItem("email"); // Get logged-in user's email
  if (!email) {
    alert("You are not logged in!");
    return;
  }

  // Fetch all votes from localStorage
  let votes = JSON.parse(localStorage.getItem("votes")) || [];

  // Check if this email has already voted
  let userHasVoted = votes.some((vote) => vote.email === email);
  if (userHasVoted) {
    alert("You have already voted!");
    return;
  }

  // Save the new vote with the email
  votes.push({ email: email, candidate: candidate });

  // Update localStorage
  localStorage.setItem("votes", JSON.stringify(votes));

  alert(`You voted for ${candidate}`);
}

function logout() {
  localStorage.removeItem("isLoggedIn"); // Remove login status
  localStorage.removeItem("email"); // Remove stored email
  alert("Logged out successfully!");
  window.location.href = "index.html"; // Redirect to login page
}
