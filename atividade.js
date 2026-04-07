
var button = document.querySelector("button");


function fazerCalculo (){

  var primeiro_numero = document.getElementById("primeiro_numero").value;
  var operacao = document.getElementById("operacao").value;
  var segundo_numero = document.getElementById("segundo_numero").value;
  var resultado;

  switch (operacao){
    case "+": resultado = Number(primeiro_numero) + Number(segundo_numero);
    break;
    case "-": resultado = Number(primeiro_numero) - Number(segundo_numero);
    break;
    case "*": resultado = Number(primeiro_numero) * Number(segundo_numero);
    break;
    case "/": resultado = Number(primeiro_numero) / Number(segundo_numero);
    break;
  }

  document.getElementById("resultado").innerHTML = "Total: " + resultado;
}

button.onclick = fazerCalculo;
