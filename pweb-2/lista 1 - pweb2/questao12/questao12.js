let numero = parseInt(prompt("Digite um número: "))

let x, contador = 0

while (contador<numero) {
    if (numero % x == 0) {
        x++
    }
    contador++
}

window.alert(x)