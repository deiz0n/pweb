let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

function maiorNumero(x, y, z) {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else {
        return z
    }
}

let resultado = maiorNumero(numero1, numero2, numero3)

window.alert(`O maior número entre ${numero1}, ${numero2} e ${numero3} é: ${resultado}`)