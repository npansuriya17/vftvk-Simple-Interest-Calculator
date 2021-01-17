document.addEventListener('DOMContentLoaded', () => {

    var btn = document.querySelector("#compute").addEventListener("click", () => {
        
        var principal = document.querySelector("#principal").value;
        if (principal <= 0) {
            alert("Enter a positive number");
            document.querySelector("#principal").focus();
        }

        var rate = document.querySelector("#rate").value;
        var years = document.querySelector("#years").value;

        var interest = principal * rate * years / 100;
        amount = Number(principal) + Number(interest);
        var year = Number(2020) + Number(years);
        document.querySelector('#result').textContent = 'If you deposit ' + principal + ', at an interest rate of ' + rate + '%. You will receive an amount of ' + amount + ', in the year ' + year;
        
    });

    var rate_val = document.querySelector("#rate").addEventListener("input", () => {
        var val = document.querySelector('#rate').value;
        document.querySelector("#int_val").textContent = val + '%';
    });
});
