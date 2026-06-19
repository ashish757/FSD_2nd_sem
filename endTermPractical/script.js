let num = document.getElementById('num');
let form = document.getElementById('sumForm');
let result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let n = parseInt(num.value);
    if (isNaN(n) || n < 1) {
        result.textContent = "Please enter a valid positive integer.";
        return;
    }
    
    let sum = (n * (n + 1)) / 2;
    result.innerHTML = `The sum of numbers from <span class="highlight">1</span> to <span class="highlight">${n}</span> is: <span class="resultValue">${sum}</span>`;
});