// Array para armazenar os veículos cadastrados
let veiculos = [];

// Função para atualizar a lista de veículos na interface
function atualizarLista() {
    const lista = document.getElementById("listaVeiculos");
    lista.innerHTML = ''; // Limpa a lista

    veiculos.forEach((veiculo, index) => {
        const item = document.createElement("li");
        item.textContent = `Modelo: ${veiculo.modelo}, Cor: ${veiculo.cor}, Placa: ${veiculo.placa}`;
        lista.appendChild(item);
    });
}

// Função para tratar o envio do formulário
document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const cor = document.getElementById("cor").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const acao = document.getElementById("acao").value;

    if (acao === "cadastrar") {
        // Cadastro de veículo
        veiculos.push({ cor, modelo, placa });
    } else if (acao === "alterar") {
        // Alteração de veículo
        const placaAlterar = prompt("Confirme a placa do veículo que deseja alterar:");
        const veiculoParaAlterar = veiculos.find(veiculo => veiculo.placa === placaAlterar);

        if (veiculoParaAlterar) {
            veiculoParaAlterar.cor = cor;
            veiculoParaAlterar.modelo = modelo;
            veiculoParaAlterar.placa = placa;
        } else {
            alert("Veículo não encontrado para alteração.");
        }
    } else if (acao === "excluir") {
        // Exclusão de veículo
        const placaExcluir = prompt("Confirme a placa do veículo que deseja excluir:");
        veiculos = veiculos.filter(veiculo => veiculo.placa !== placaExcluir);
    }

    // Atualiza a lista de veículos
    atualizarLista();

    // Limpa os campos do formulário
    document.getElementById("formCadastro").reset();
});
