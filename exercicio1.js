
function calcularMedia(notas) {
    let soma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    
    let media = soma / notas.length;
    
    return media;
}

let notas = [5, 8, 10, 7];
let media = calcularMedia(notas);

console.log("A média é: " + media);