document.getElementById('login-btn').addEventListener('click',function(event){
  event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const pin = document.getElementById('pin').value;
  // console.log(phoneNumber,pin);
  
  if(phoneNumber === '01518991484' && pin === '456'){
    window.location.href = "./addmoney.html";
  }else{
    window.location.href = "./cashout.html";
  }
});




// window.location.href = "nextpage2.html";

// document.querySelector("form").addEventListener("submit", function(event) {
//   event.preventDefault(); // 🔥 Prevent page reload
//   console.log("Form submitted without reloading!");
// });
