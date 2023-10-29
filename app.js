let count = 1;
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const quote = document.querySelector('.quotes-quote');
const quoteContainer = document.querySelector('.quotes-container')
window.onload = function() {
    quote.textContent = quotes[count-1]
};



// BMI Code


const calculate = document.querySelector('.calculate');
let result = document.querySelector('.result');
let form = document.querySelector('.form');

calculate.addEventListener('click', () => {
    let kg = parseFloat(document.querySelector('#kg').value);
    let cm = parseFloat(document.querySelector('#cm').value);
    let age = parseFloat(document.querySelector('#age').value);

    if (isNaN(kg) || isNaN(cm) || isNaN(age)) {
        alert('Please Enter Your Height, Weight and Age Properly');
        form.reset();
        return;
    }




    if (kg < 0 || cm < 0 || age < 0) {
        alert('Please Enter Valid Height, Weight and Age Properly');
        form.reset();
        return;
    }
    else {
        let bmi = (kg / (cm * cm) * 10000).toFixed(2)
        result.style.display = "initial";
        if (bmi < 18.6 && bmi > 0) {
            result.innerHTML = `Under-Weight : <span>${bmi}</span>`;
            result.style.color = 'red';
        }

        else if (bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `Normal : <span>${bmi}</span>`;
            result.style.color = 'green'
        }

        else if (bmi >= 25.0 && bmi < 29.9) {
            result.innerHTML = `Over-Weight : <span>${bmi}</span>`;
            result.style.color = 'red'
        }

        else {
            result.innerHTML = `Obese : <span>${bmi}</span>`;
            result.style.color = 'red'
        }
    }

    form.reset();

})

// BMI Code Ends

// Quote Code Starts



let quote1 = "The greatest glory in living lies not in never falling, but in rising every time we fall";
let quote2 = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking";
let quote3 = "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough";
let quote4 = "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.";
let quote5 = "You must be the change you wish to see in the world.";
let pcount = document.querySelector('.maincounter')

let quotes = [quote1, quote2, quote3, quote4, quote5];

left.addEventListener('click', () => {
    if (count == 1) count = 5;
    else count--;
    quote.textContent = quotes[count - 1];
    pcount.textContent = count
})
right.addEventListener('click', () => {
    if (count == 5) count = 1;
    else count++;
    quote.textContent = quotes[count - 1];
    pcount.textContent = count;
})

// mouse scroll event

// quoteContainer.addEventListener('wheel', (event) => {
//     if (event.deltaY > 0) {
//         if (count == 0) count = 5;
//         else count--;
//         quote.textContent = quotes[count - 1];
//         pcount.textContent = count;
//     }
// });

// Quote Code Ends