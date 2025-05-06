class GeradorNumeros {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  gerarNumeros(qtd) {
    const numeros = [];
    for (let i = 0; i < qtd; i++) {
      const numero = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      numeros.push(numero);
    }
    return numeros;
  }
}
