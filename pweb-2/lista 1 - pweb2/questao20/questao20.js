let altura = parseFloat(prompt("Digite sua altura: "))
let peso = parseFloat(prompt("Digite seu peso: "))

function mvcCalculator(peso, altura) {
    return peso / (altura * altura)
}

let resultado = mvcCalculator(peso, altura)

window.alert(`Seu IMC é ${resultado}`)