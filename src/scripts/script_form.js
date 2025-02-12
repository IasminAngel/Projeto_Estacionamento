
let veiculos = [];

function atualizarLista() {
    const lista = document.getElementById("listaVeiculos");
    lista.innerHTML = ''; 

    veiculos.forEach((veiculo, index) => {
        const item = document.createElement("ul");
        item.textContent = `Modelo: ${veiculo.modelo}, Cor: ${veiculo.cor}, Placa: ${veiculo.placa}, Tamanho: ${veiculo.tamanho}`;
        lista.appendChild(item);
    });
}

document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const cor = document.getElementById("cor").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const acao = document.getElementById("acao").value;
    const tamanho = document.getElementById("tamanho").value;

    if (acao === "cadastrar") {
        
        veiculos.push({ cor, modelo, placa, tamanho });
    } else if (acao === "alterar") {
        
        const placaAlterar = prompt("Confirme a placa do veículo que deseja alterar:");
        const veiculoParaAlterar = veiculos.find(veiculo => veiculo.placa === placaAlterar);

        if (veiculoParaAlterar) {
            veiculoParaAlterar.cor = cor;
            veiculoParaAlterar.modelo = modelo;
            veiculoParaAlterar.placa = placa;
            veiculoParaAlterar.tamanho = tamanho;

        } else {
            alert("Veículo não encontrado para alteração.");
        }
    } else if (acao === "excluir") {
        const placaExcluir = prompt("Confirme a placa do veículo que deseja excluir:");
        veiculos = veiculos.filter(veiculo => veiculo.placa !== placaExcluir);
    }

    // Atualiza a lista de veículos
    atualizarLista();

    // Limpa os campos do formulário
    document.getElementById("formCadastro").reset();
});
