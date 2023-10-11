let a = parseInt(prompt("Digite um número: "))
let b = parseInt(prompt("Digite outro número: "))

function soma(x, y) {
    return x + y
}
    
let resultado = soma(a, b)

alert(`A soma entre ${a} e ${b} = ${resultado}`)