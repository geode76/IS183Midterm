//validates username and password
function validate() {

  var un = document.getElementById("uname").value;
  var pw = document.getElementById("pswd").value;

  if (un == "Allen") {
    if (pw == "Huddleston") {
      window.close()
      window.open("./home.html");
    }
    else {
      alert("Password is invald: Please try again.")
    }
  }
  else {
    alert("Username is invalid: Please try again.");
  }
}
