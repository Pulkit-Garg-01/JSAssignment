function validateForm(event) {
    event.preventDefault();

    var eduqual = document.getElementById("eduqual").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;

    // Regex
    var phoneRegex = /^[6-9]\d{9}$/; 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Clear previous error messages
    var errorContainer = document.getElementById("errorContainer");
    errorContainer.innerHTML = "";

    
    var isValid = true;

    if (eduqual === "") {
      displayError("Please select your educational qualification.", "eduqual");
      isValid = false;
    }

    if (!phone.match(phoneRegex)) {
      displayError("Please enter a valid Indian mobile number.", "phone");
      isValid = false;
    }

    if (age < 18) {
      displayError("You must be at least 18 years old.", "age");
      isValid = false;
    }

    if (!gender) {
      displayError("Please select your gender.", "gender");
      isValid = false;
    }

    if (!email.match(emailRegex)) {
      displayError("Please enter a valid email address.", "email");
      isValid = false;
    }

    if (password === "") {
      displayError("Please enter a password.", "password");
      isValid = false;
    }

    if (confirmPassword !== password) {
      displayError("Passwords do not match.", "confirmPassword");
      isValid = false;
    }

    if (name === "") {
      displayError("Please enter your name.", "name");
      isValid = false;
    }

    if (city === "") {
      displayError("Please enter your city.", "city");
      isValid = false;
    }

    if (isValid) {
      // Submit the form or perform any other desired action
      document.getElementById("signupForm").submit();
    }
  }

  function displayError(message, fieldId) {
    var errorContainer = document.getElementById("errorContainer");
    var errorText = document.createElement("p");
    errorText.className = "error";
    errorText.innerHTML = message;
    errorContainer.appendChild(errorText);
    // document.getElementById(fieldId).focus();
  }