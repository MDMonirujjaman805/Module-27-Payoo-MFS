// create by chatGPT 

document.getElementById('btn-add-money')
.addEventListener('click', function (event) {
    event.preventDefault();

    const pin = document.getElementById('pin-input-field').value.trim();
    if (pin !== '456') {
        alert('Try again!');
        return;
    }

    const amount = parseFloat(document.getElementById('amount-input-field').value) || 0;
    const mainBalanceElement = document.getElementById('main-balance');
    const preBalance = parseFloat(mainBalanceElement.innerText) || 0;
    
    const newBalance = preBalance + amount;
    mainBalanceElement.innerText = newBalance.toFixed(2); // দুই সংখ্যা পর্যন্ত দেখাবে
    
    alert('Added money to your account.');
});

