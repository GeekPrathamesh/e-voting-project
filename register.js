function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const age = document.getElementById("age").value;
  const votingCard = document.querySelector(
    'input[name="votingCard"]:checked'
  );

  if (!name || !email || !password || !age || !votingCard) {
    alert("Please fill in all fields!");
    return;
  }

  if (age < 18 && votingCard.value === "no") {
    alert(
      "You are not eligible to register as you are under 18 or may do not have a voting card issued before."
    );
    return;
  }
  if (age < 18 && votingCard.value === "yes") {
    alert(
      "You are not eligible to register as you are under 18 or may do not have a voting card issued before."
    );
    return;
  }
  if (age > 18 && votingCard.value === "no") {
    alert(
      "You are not eligible to register as you doesn't have voting card.Please apply for it first.."
    );
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("age", age);
  localStorage.setItem("votingCard", votingCard.value);

  alert("Registration Successful! You can now log in.");
  window.location.href = "index.html";
}
