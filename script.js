document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // In a real application, you should send this data to a server for validation.
      // For this example, we'll just show an alert with the entered data.
      alert(`Login clicked!\nUsername: ${username}\nPassword: ${password}`);
  
      // You can then redirect to another page or perform further actions as needed.
    });
  });
  