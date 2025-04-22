function soma (p1, p2) {
  return p1 + p2
}
function subtracao (p1, p2) {
  return p1 - p2
}
function divisao (p1, p2) {
  return p1 / p2
}
function multiplicacao (p1, p2) {
  return p1 * p2
}
let operacao = prompt('Digite o sinal da operação desejada\nSoma = " + "\nSubtração = " - "\nMultiplicação = " * "\nDivisão = " / "');
let p1 = parseFloat(prompt('Digite o primeiro valor: '))
let p2 = parseFloat(prompt('Digite o segundo valor: '))
switch (operacao) {
    case '+':
      resultado = soma (p1, p2)
      document.getElementById('demo').innerHTML = resultado
      break;
  
    case '-':
      resultado = subtracao (p1, p2)
      document.getElementById('demo').innerHTML = resultado
      break;
  
    case '/':
      resultado = divisao (p1, p2)
      document.getElementById('demo').innerHTML = resultado
      break;
  
    case '*':
      resultado = multiplicacao (p1, p2)
      document.getElementById('demo').innerHTML = resultado
      break;
  
    default:
      alert('Operação invalida')
      break;
  }


