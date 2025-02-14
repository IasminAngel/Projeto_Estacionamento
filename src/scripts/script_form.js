
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


/* let veiculos = [];

async function carregarVeiculos() {
    try {
        const response = await fetch("http://localhost:3306/veiculos");
        veiculos = await response.json();
        atualizarLista();
    } catch (error) {
        console.error("Erro ao carregar veículos:", error);
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaVeiculos");
    lista.innerHTML = ''; 

    veiculos.forEach((veiculo) => {
        const item = document.createElement("ul");
        item.textContent = `Modelo: ${veiculo.modelo}, Cor: ${veiculo.cor}, Placa: ${veiculo.placa}, Tamanho: ${veiculo.tamanho}`;
        lista.appendChild(item);
    });
}

document.getElementById("formCadastro").addEventListener("submit", async function(event) {
    event.preventDefault();

    const cor = document.getElementById("cor").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const acao = document.getElementById("acao").value;
    const tamanho = document.getElementById("tamanho").value;

    if (acao === "cadastrar") {
        try {
            const response = await fetch("http://localhost:3306/cadastrar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cor, modelo, placa, tamanho })
            });

            const resultado = await response.json();
            alert(resultado.mensagem);
            if (response.ok) carregarVeiculos();
        } catch (error) {
            console.error("Erro ao cadastrar veículo:", error);
        }
    } else if (acao === "alterar") {
        const placaAlterar = prompt("Confirme a placa do veículo que deseja alterar:");
        if (!placaAlterar) return;

        try {
            const response = await fetch(`http://localhost:3306/alterar/${placaAlterar}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cor, modelo, placa, tamanho })
            });

            const resultado = await response.json();
            alert(resultado.mensagem);
            if (response.ok) carregarVeiculos();
        } catch (error) {
            console.error("Erro ao alterar veículo:", error);
        }
    } else if (acao === "excluir") {
        const placaExcluir = prompt("Confirme a placa do veículo que deseja excluir:");
        if (!placaExcluir) return;

        try {
            const response = await fetch(`http://localhost:3306/excluir/${placaExcluir}`, {
                method: "DELETE"
            });

            const resultado = await response.json();
            alert(resultado.mensagem);
            if (response.ok) carregarVeiculos();
        } catch (error) {
            console.error("Erro ao excluir veículo:", error);
        }
    }

    document.getElementById("formCadastro").reset();
});

// Carregar a lista de veículos ao carregar a página
window.onload = carregarVeiculos;*/