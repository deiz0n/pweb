let fatorial = 1, numero = parseInt(prompt("Digite um número: "))

for(let i=1; i<=numero; i++) {
    if (numero==0) {
        return fatorial = 1
    }
    fatorial *= i
}

alert(`A farial de ${numero} é ${fatorial}`)