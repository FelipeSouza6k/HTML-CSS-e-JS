let p1 = parseFloat(prompt('Digite o primeiro valor: '));
let p2 = parseFloat(prompt('Digite o segundo valor: '));
alert("Agora clique na operação desejada");
function soma (p1, p2) {  
  resultado = p1 + p2;
  document.getElementById('demo').innerHTML = resultado;
}
function subtracao (p1, p2) {
  resultado = p1 - p2;
  document.getElementById('demo').innerHTML = resultado;
}

function divisao (p1, p2) {
  resultado = p1 / p2;
  document.getElementById('demo').innerHTML = resultado;
  if (p2 === 0){
    alert("Não é possível fazer divisão com 0");
  }
}
function multiplicacao (p1, p2) {
  resultado = p1 * p2
  document.getElementById('demo').innerHTML = resultado;
}
