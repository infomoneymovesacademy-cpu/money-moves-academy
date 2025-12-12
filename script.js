const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
  container.classList.add("active");
});

loginBtn.addEventListener('click', () =>
  {
  container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("contact");

  button.addEventListener("click", function() {
    //Open the other HTML file in a new tab
    window.open("contact.html", "_blank");
  });
});


