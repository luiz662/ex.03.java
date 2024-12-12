function podeEntrarNoShow(idade) {
    return idade >= 16 ? "Pode entrar" : "Não pode entrar";
  }
  
  // Exemplo de uso:
  console.log(podeEntrarNoShow(15)); // Saída: Não pode entrar
  console.log(podeEntrarNoShow(18)); // Saída: Pode entrar