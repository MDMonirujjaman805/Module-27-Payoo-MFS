document.getElementById('show-cash-out-btn').addEventListener('click',function(){
  console.log('cash out button clicked');
  document.getElementById('cash-out-section').classList.remove('hidden');
  document.getElementById('add-money-section').classList.add('hidden');
});
document.getElementById('show-add-money-btn').addEventListener('click',function(){
  console.log('add money button clicked');
  document.getElementById('add-money-section').classList.remove('hidden');
  document.getElementById('cash-out-section').classList.add('hidden');
});


// add money js code 
document.getElementById('show-add-money-btn').addEventListener('click',function (event){
  event.preventDefault();
  const pin = document.getElementById('add-money-pin-input-field').value;
  console.log(pin);
  if(pin === '456'){
    console.log('added money in Your account'); 
    const amount = document.getElementById('add-money-amount-input-field').value;
    console.log(amount);
    const mobileNumber = document.getElementById('mobile-input-field').value;
    console.log(mobileNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    console.log(mainBalance);
    const preBalance = parseFloat(mainBalance);
    const nextBalance = parseFloat(amount);
    const newBalance = preBalance - nextBalance;
    document.getElementById('main-balance').innerText = newBalance;
    console.log(newBalance);
    alert('Your Add Money Successful!')
  }else{
    alert('Try agin!')
  }
});


// cash out js code 
document.getElementById('show-cash-out-btn').addEventListener('click',function (event){
  event.preventDefault();
  const pin = document.getElementById('cash-out-pin-input-field').value;
  console.log(pin);
  if(pin === '456'){
    console.log('cash out taka in Your account'); 
    const amount = document.getElementById('cash-out-amount-input-field').value;
    console.log(amount);
    const mobileNumber = document.getElementById('mobile-input-field-2').value;
    console.log(mobileNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    console.log(mainBalance);
    const preBalance = parseFloat(mainBalance);
    const nextBalance = parseFloat(amount);
    const newBalance = preBalance - nextBalance;
    document.getElementById('main-balance').innerText = newBalance;
    console.log(newBalance);
    alert('Your Cash Out Successful!')
  }else{
    alert('Try agin!')
  }
});