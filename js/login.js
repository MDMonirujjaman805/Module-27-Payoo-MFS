document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
});



// document.querySelector("form").addEventListener("submit", function(event) {
//   event.preventDefault(); // 🔥 Prevent page reload
//   console.log("Form submitted without reloading!");
// });
