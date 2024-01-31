document.getElementById('calculateBtn').addEventListener('click', function () {
    const loanAmount = document.getElementById('loanAmount').value;
    const loanDuration =document.getElementById('loanDuration').value;
    const interestRate =document.getElementById('interestRate').value;

    

    let monthlyInterestRate = (interestRate / 100 / 12);
    let totalEMI = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    let totalAmount = totalEMI * loanDuration;
    let totalInterest = totalAmount - loanAmount;

        let a = parseInt(monthlyInterestRate);
        let b = parseInt(totalEMI);
        let c = parseInt(totalAmount);
        let d = parseInt(totalInterest);


    document.getElementById('totalAmount').textContent = c;
    document.getElementById('totalEMI').textContent = b;
    document.getElementById('totalInterest').textContent = d;
});