function compararIdades(idade1, idade2) {
  if (idade1 > idade2) {
    return "A primeira pessoa é mais velha";
  } else if (idade1 < idade2) {
    return "A segunda pessoa é mais velha";
  } else {
    return "As pessoas têm a mesma idade";
  }
}

// Exemplo de uso:
console.log(compararIdades(25, 30)); // Saída: A segunda pessoa é mais velha
console.log(compararIdades(35, 35)); // Saída: As pessoas têm a mesma idade