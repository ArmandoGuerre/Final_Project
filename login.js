function validateForm() {
        const usernameInput = document.myForm.username.value;
        const passwordInput = document.myForm.userPassword.value;
        const error1 = document.querySelector(".error");
        const error2 = document.querySelector(".error-2");
        error1.innerHTML = "";
        error2.innerHTML = "";
        if (usernameInput == null || usernameInput === "") {
          error1.innerHTML = "Username is blank";
          return false;
        }
        if (usernameInput !== "coolStudent123") {
          error1.innerHTML = "You didn't type in a valid username";
          return false;
        }
        if (passwordInput == null || passwordInput === "") {
          error2.innerHTML = "Password is blank";
          return false;
        }
        if (passwordInput !== "coolStudent123") {
          error2.innerHTML = "You didn't type in a valid password";
          return false;
        }
      }