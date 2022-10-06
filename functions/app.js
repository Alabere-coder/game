const btn = document.getElementById('btn');
const output = document.getElementById('output-field');

const number = [Math.floor(Math.random() * 5)]

btn.addEventListener('click', () => {

    let input = document.getElementById('user-input').value
    if (input == number) {
        output.innerHTML = `you guess right, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = "your guess is  low, please try again "
    } else (input > number)
    output.innerHTML = "your guess is high, please try again"
});