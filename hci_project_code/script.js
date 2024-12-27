// Switch between pages
document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".login-page").hidden = true;
    document.querySelector(".dashboard").hidden = false;
  });
  
  document.querySelectorAll(".rate-button").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".dashboard").hidden = true;
      document.querySelector(".rating-page").hidden = false;
    });
    function saveUsername() {
        // Get the value from the input field
        var username = document.getElementById('username').value;
    
         // Display the username in the paragraph
         document.getElementById('username').textContent = username;}
  });