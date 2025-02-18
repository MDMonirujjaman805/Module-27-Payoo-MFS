document.getElementById('btn-add-money').addEventListener('click',function (event){
  event.preventDefault();
  const pin = document.getElementById('pin-input-field').value;
  // console.log(pin);
  if(pin === '456'){
    // console.log('added money in Your account'); 
    const amount = document.getElementById('amount-input-field').value;
    // console.log(amount);
    const mobileNumber = document.getElementById('mobile-input-field').value;
    // console.log(mobileNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(mainBalance);
    const preBalance = parseFloat(mainBalance);
    const nextBalance = parseFloat(amount);
    const newBalance = preBalance - nextBalance;
    document.getElementById('main-balance').innerText = newBalance;
    console.log(newBalance);
    alert('Your Cash Out Successful!')
  }else{
    alert('Try agin!')
  }
})