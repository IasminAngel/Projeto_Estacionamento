function abrirDialogo(numero, botao) {
  const dialogo = document.getElementById("dialogo");
  const overlay = document.getElementById("overlay");
  dialogo.style.display = "block";
  overlay.style.display = "block";
  dialogo.innerHTML = `
                        <p>O que você deseja fazer com a vaga ${numero}?</p>
                        <button class="opcao" onclick="reservar(${numero}, this)">Reservar vaga</button>
                        <button class="opcao" onclick="estacionar(${numero}, this)">Estacionar a vulso R$:2 ---> Por cada hora</button>
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
  const dialogo = document.getElementById("dialogo");
  const overlay = document.getElementById("overlay");
  dialogo.style.display = "block";
  overlay.style.display = "block";

  dialogo.innerHTML = `
          <p>Qual pacote você deseja adquirir?</p>
          <a href="../../IndexPagamento.html"><button class="opcao">(1°) Pacote R$:12 ---> 8 horas</button></a>
          <a href="../../IndexPagamento.html"><button class="opcao">(2°) Pacote R$:20 ---> 16 horas</button></a>
          <a href="../../IndexPagamento.html"><button class="opcao">(3°) Pacote R$:27 ---> 24 Horas</button></a>
          <button class="opcao" onclick="abrirDialogo(${numero}, this)">Voltar</button>
          <button class="opcao" onclick="fecharDialogo()">Cancelar</button>
  `;
}


function estacionar(numero, botao) {
  botao.className = "retangulo ocupada";
  const horas = prompt("Por quantas horas você deseja estacionar?");
  alert("Você estacionou a vaga " + numero + " por " + horas + " horas");
  
  fecharDialogo();
}

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
      num.textContent = numero; 
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


window.onload = criarRetangulos;

