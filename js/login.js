document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const pin = document.getElementById('pin').value;
  // console.log(phoneNumber,pin);
  
  if(phoneNumber === '5' && pin === '1234'){
    window.location.href = "./home.html";
  }else{
    window.location.href = "./homepage2.html";
  }
});




// window.location.href = "nextpage2.html";

// document.querySelector("form").addEventListener("submit", function(event) {
//   event.preventDefault(); // 🔥 Prevent page reload
//   console.log("Form submitted without reloading!");
// });
