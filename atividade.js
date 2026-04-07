
/**
var peso = prompt("Qual o seu peso?");
var altura = prompt ("Quanto vc mede?");
var IMC = peso / (altura * altura);
if (IMC >= 25) 
  {alert("Você está acima do peso");
} else {
 alert("Vc não está acima do peso")}

 var idade = prompt("Quantos anos você tem?")
 var temCarteira = prompt("Você possui carteira de motorista?(responda com sim ou não")
 if (idade >= 18 && temCarteira == "sim") {
    alert("Pode dirigir");
}
else {alert("Você não pode dirigir")}

**/

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
