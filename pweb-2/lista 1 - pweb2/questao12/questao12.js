let numero = parseInt(prompt("Digite um número: "))

let x = 1
let divisores = 0

while (x<=numero) {
    if (numero % x == 0) {
        divisores ++
    } 
    x++
}

if (divisores == 2 && numero > 1) {
    window.alert(`O número ${numero} é primo`)
} else {
    window.alert(`O número ${numero} não é primo`)
}   