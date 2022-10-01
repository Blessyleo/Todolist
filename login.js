function login(callback) {
   var user = document.getElementById("username").value;
   var pass = document.getElementById("password").value;

   if (user == "admin" && pass == "12345") {

      callback();

   }
   else {
      alert("Invalid Username or Password");

   }

}
function click() {
   document.querySelector("form").action = "./main.html";

}
function validate() {
   login(click);
}



