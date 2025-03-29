function checkAdmin() {
  if (localStorage.getItem("isAdmin") !== "true") {
    alert("Access Denied! Admin Login Required.");
    window.location.href = "admin-login.html"; // Redirect if not admin
  }
}

function showResults() {
  let votes = JSON.parse(localStorage.getItem("votes")) || [];
  let results = {};

  // Count votes per candidate
  votes.forEach((vote) => {
    if (results[vote.candidate]) {
      results[vote.candidate]++;
    } else {
      results[vote.candidate] = 1;
    }
  });

  let resultsTable = document.getElementById("resultsTable");
  resultsTable.innerHTML = ""; // Clear previous results

  for (let candidate in results) {
    let row = `<tr><td>${candidate}</td><td>${results[candidate]}</td></tr>`;
    resultsTable.innerHTML += row;
  }
}

function clearResults() {
  if (confirm("Are you sure you want to clear all voting data?")) {
    localStorage.removeItem("votes");
    document.getElementById("resultsTable").innerHTML = "";
    alert("All voting data has been cleared!");
  }
}

function logoutAdmin() {
  localStorage.removeItem("isAdmin");
  alert("Admin Logged Out!");
  window.location.href = "index.html"; // Redirect to home page
}

checkAdmin(); // Check admin access on page load
showResults(); // Display results if admin is logged in
