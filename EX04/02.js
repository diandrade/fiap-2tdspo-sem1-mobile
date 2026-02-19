let veiculo = {
    marca: "Fiat",
    modelo: "Palio",
    ano: 2002,
    disponivel: false
}

console.log(veiculo.marca);
console.log(veiculo.modelo);
console.log(veiculo["ano"]);
console.log(veiculo["disponivel"]);

veiculo.cor = "Prata";

console.log(veiculo.cor);