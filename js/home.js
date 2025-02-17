document.getElementById('btn-add-money').addEventListener('click',function (event){
  event.preventDefault();
  const mobileInputField = document.getElementById('mobile-input-field').value;
  console.log(mobileInputField);
  const amountInputField = document.getElementById('amount-input-field').value;
  console.log(amountInputField);
  const pinInputField = document.getElementById('pin-input-field').value;
  console.log(pinInputField);

  
});
// if(pin === '1234'){
//   console.log('add taka');
// }else{
//   alert('Try agin!')
// }