function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc < 18.5 ? "Abaixo do peso" : 
         imc < 25 ? "Peso normal" : 
         imc < 30 ? "Sobrepeso" : "Obesidade";
}

// Exemplo de uso:
console.log(calcularIMC(70, 1.75)); // Saída: Peso normal