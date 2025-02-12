function abrirDialogo(numero, botao) {
  const dialogo = document.getElementById("dialogo");
  const overlay = document.getElementById("overlay");
  dialogo.style.display = "block";
  overlay.style.display = "block";
  dialogo.innerHTML = `
                        <p>O que você deseja fazer com a vaga ${numero}?</p>
                        <button class="opcao" onclick="reservar(${numero}, botao)"> (1°) Pacote R$:12 ---> 8 horas
 </button>
                        <button class="opcao" onclick="reservar(${numero}, botao)"> (2°) Pacote R$:20 ---> 16 horas </button>
                        <button class="opcao" onclick="reservar(${numero}, botao)"> (3°) Pacote R$:27 ---> 24 Horas </button>
                        <button class="opcao" onclick="estacionar(${numero}, botao)">Estacionar a vulso R$:2 ---> Por cada hora</button>
                        <button class="opcao" onclick="assinar(${numero}, botao)">Assinatura mensal ---> R$:600</button>
                        <button class="opcao" onclick="fecharDialogo()">Cancelar</button>
                    `;
}

function fecharDialogo() {
  const dialogo = document.getElementById("dialogo");
  const overlay = document.getElementById("overlay");
  dialogo.style.display = "none";
  overlay.style.display = "none";
}

function reservar(numero, botao) {
  botao.className = "retangulo reservada";
  alert("Você reservou a vaga " + numero);
  fecharDialogo();
}

function estacionar(numero, botao) {
  botao.className = "retangulo ocupada";
  const horas = prompt("Por quantas horas você deseja estacionar?");
  alert("Você estacionou a vaga " + numero + " por " + horas + " horas");
  fecharDialogo();
}

function assinar(numero, botao) {
  alert("Você fez uma assinatura mensal para a vaga " + numero);
  fecharDialogo();
}

// Função para criar os 30 botões divididos em 5 blocos de 6
function criarRetangulos() {
  const container = document.body.querySelector(".container > div");
  for (let bloco = 1; bloco <= 5; bloco++) {
    const blocoDiv = document.createElement("div");
    blocoDiv.classList.add("bloco");
    for (let i = 1; i <= 6; i++) {
      const numero = (bloco - 1) * 6 + i;
      const retanguloContainer = document.createElement("div");
      retanguloContainer.classList.add("retangulo-container");
      const num = document.createElement("div");
      num.classList.add("numero");
      num.textContent = numero; // Número acima do retângulo
      const botao = document.createElement("button");
      botao.classList.add("retangulo");
      botao.addEventListener("click", () => {
        abrirDialogo(numero, botao);
      });
      const img = document.createElement("img");
      img.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-XAcTd0KJSJhSt-3GNEo3XsMEccLevPGMdQ&s"; // URL da imagem
      botao.appendChild(img);
      retanguloContainer.appendChild(num);
      retanguloContainer.appendChild(botao);
      blocoDiv.appendChild(retanguloContainer);
    }
    container.appendChild(blocoDiv);
  }
}

// Chamada da função para criar os retângulos ao carregar a página
window.onload = criarRetangulos;
