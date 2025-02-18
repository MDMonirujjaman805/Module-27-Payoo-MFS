document.getElementById('btn-add-money').addEventListener('click',function (event){
  event.preventDefault();
  const mobileInputField = document.getElementById('mobile-input-field').value;
  // console.log(mobileInputField);
  const amountInputField = document.getElementById('amount-input-field').value;
  // console.log(amountInputField);
  const pinInputField = document.getElementById('pin-input-field').value;
  // console.log(pinInputField);
  if(pinInputField === '456'){
    const mainBalance = document.getElementById('main-balance').innerText;
    // console.log(mainBalance);
    const mainBalanceNumber = parseFloat(mainBalance);
    const amountNumber = parseFloat(amountInputField);
    const newBalance = mainBalanceNumber + amountNumber;
    console.log( newBalance);
    document.getElementById('main-balance').innerText = newBalance;
    alert('Add Money Successful!')
  }else{
  alert('Try agin!')
  };
});




// mainBalance = "9,400"; 
// parseFloat(mainBalance) // => 9 (ভুল ফলাফল!)
// console.log(mainBalance);
// mainBalance = "9400"; 
// parseFloat(mainBalance) // => 9400 (ঠিক ফলাফল!)
// console.log(mainBalance);

