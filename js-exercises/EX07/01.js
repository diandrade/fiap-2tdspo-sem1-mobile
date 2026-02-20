function calcularAreaTradicional(base, altura){
    return base / altura * 2;
}

const calcularAreaArrow = (base, altura) => base/altura * 2;

console.log(calcularAreaTradicional(20, 10));
console.log(calcularAreaArrow(20, 10));

function cumprimentarTradicional(nome, periodo){
    if (periodo != "Manhã" && periodo != "Tarde" && periodo != "Noite")
    {
        return ("Insira um período válido.");
    }
    return ("Boa " + periodo + " " + nome);
}

const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + " " + nome;

console.log(cumprimentarTradicional("Diego", "Noite"))
console.log(cumprimentarArrow("Diego", "Noite"));