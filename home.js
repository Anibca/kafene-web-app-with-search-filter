$(document).ready(function () {
  if (localStorage.getItem("loginStatus") == "true") {
    location.assign("./orders.html");
  }
  let loginForm = window.document.getElementById("loginform");
  loginForm.onsubmit = function (e) {
    e.preventDefault();
    let credentials = {
      username: this.username.value,
      password: this.password.value,
    };
    if (
      credentials.username != "" &&
      credentials.password != "" &&
      credentials.username === credentials.password
    ) {
      $.post(
        "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/login",
        credentials,
        function () {
          alert("Login Successful!!");
          window.localStorage.setItem("loginStatus", true);
          location.replace("./orders.html");
        }
      );
    } else {
      alert(
        `Please Enter Valid login details`
      );
    }
  };
});
