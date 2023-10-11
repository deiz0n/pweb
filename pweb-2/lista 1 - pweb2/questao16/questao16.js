const numeroAleatorio = 18
let condicao = true
let tentativas = 0

while (condicao) {
    let numero = parseInt(prompt("Digite um número: "))

    if (numeroAleatorio > numero) {
        tentativas++
        window.alert("O número misterioso é maior que " + numero)
    } else if (numeroAleatorio == numero) {
        tentativas++
        window.alert(`Parabéns! Você descobriu o número misterioso com ${tentativas} tentativas`)
        condicao = false
    } else {
        tentativas++
        window.alert("O número misterioso é menor que " + numero)
    }
}