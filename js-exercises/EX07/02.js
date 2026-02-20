//Parte A - Escopo:
let app = "MinhaApp";

function versao() {
    let versao = "1.0";
    console.log(app);
    console.log(versao);
}

versao();
console.log(app);
//Nessa situação, versão não será impressa por se tratar de uma variável local.
console.log(versao);

//Parte B - Callback
function executarTarefa(nomeTarefa, callback) {
    console.log("Iniciando: " + nomeTarefa);
    callback();
}

executarTarefa("Varrendo o Quarto", () => console.log("Finalizado"));

//Parte C - Async
async function buscarPerfil()
{
    return "Perfil carregado: Usuário Padrão"
}
buscarPerfil().then(console.log);

