function podeTirarHabilitacao(idade) {
  return idade >= 18 ? "Pode tirar habilitação" : "Não pode tirar habilitação";
}

// Exemplo de uso:
console.log(podeTirarHabilitacao(17)); // Saída: Não pode tirar habilitação
console.log(podeTirarHabilitacao(21)); // Saída: Pode tirar habilitação