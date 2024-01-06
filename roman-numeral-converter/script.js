const convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener("click", () => {

    const numberInput = document.getElementById('number').value;
    const outputDiv = document.getElementById('output');

    if(!numberInput) {
        outputDiv.textContent = 'Please enter a valid number';
    }
    else if(numberInput <= 0) {
        outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    }
    else if(numberInput >= 4000) {
        outputDiv.textContent = 'Please enter a number less than or equal to 3999'
    }
    else {
        outputDiv.textContent = convertToRomanNumerals(numberInput);
    }
});

const convertToRomanNumerals = (num) => {
    let romanNum = '';
    const arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romanSymb = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    for(let i = 0; i < arabicNum.length; i++) {
        while(num >= arabicNum[i]){
            romanNum += romanSymb[i];
            num -= arabicNum[i];
        }
    }
    return romanNum;
}