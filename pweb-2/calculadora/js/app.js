let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = ['']
    answerScreen.innerHTML = 0
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87";

})


function isOperator(value) {
    return value === "/" || value === "*" || value === "+" || value === "-";
}

buttons.forEach((btn) => {

    btn.addEventListener("click", () => {

        if (!btn.id.match('erase')) {
            if (realTimeScreenValue.length > 0 && isOperator(realTimeScreenValue[realTimeScreenValue.length - 1]) && isOperator(btn.value)) return
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
            }
        }

        if (btn.id.match('erase')) {

            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        if (btn.id.match('evaluate')) {
            currentInput.className = ('answerScreen');
            answerScreen.className = ('currentInput');
            answerScreen.style.color = "white";
        }

        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }

    })

}) 