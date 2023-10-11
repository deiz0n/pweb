let nota, notaTotal = 0

for (let i=1; i<=5; i++) {
    nota = parseFloat(prompt(`Digite a nota ${i}: `))
    notaTotal += nota
}

let media = notaTotal / 5

window.alert("Média: " + media)

