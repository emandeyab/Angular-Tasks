
    function hidePassword() {
      var password = document.getElementById("password");
      var type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    }

    function task1form(event) {
      var name = document.getElementById("name").value;
      var nameError = document.getElementById("nameError");
      var password = document.getElementById("password").value;
      var email = document.getElementById("email").value;
      var passwordError = document.getElementById("passwordError");
      var emailError = document.getElementById("emailError");

      var isValid = true;

  if (name.length < 4) {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); 
  }
  return isValid;
}
  
    document.getElementById("name").addEventListener("input", function () {
  var nameError = document.getElementById("nameError");
  if (this.value.length < 4) {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
});

    document.getElementById("password").addEventListener("input", function() {
      var passwordError = document.getElementById("passwordError");
      if (this.value.length < 8) {
        passwordError.style.display = "block";
      } else {
        passwordError.style.display = "none";
      }
    });

    document.getElementById("email").addEventListener("input", function() {
      var emailError = document.getElementById("emailError");
      if (!this.value.includes("@")) {
        emailError.style.display = "block";
      } else {
        emailError.style.display = "none";
      }
    });