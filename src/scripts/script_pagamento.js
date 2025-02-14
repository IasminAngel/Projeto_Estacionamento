const ticket = document.getElementById("Confirmar");
const overlay = document.getElementById("overlay");
const conteudo = document.getElementById("conteudo");
const op_pagamento = document.getElementById("forma_pagamento");
const pagamento = document.getElementById("pagamento");
const fechar = document.getElementById("fechar")
const imprimir = document.getElementById("imprimir")
const cor = document.getElementById("cor")
const modelo = document.getElementById("modelo")
const tamanho = document.getElementById("tamanho")
const placa = document.getElementById("placa")
const preco = document.getElementById("preco")

overlay.style.display = "none";
console.log("Overlay encontrado:", overlay);

imprimir.onclick = imprimirTicket;
fechar.onclick = fecharOverlay;
ticket.onclick = function(event) {
    event.preventDefault();
    
    overlay.style.display = "block";
  
      

pagamento.innerText = op_pagamento.value;
cor_veiculo.innerText = cor;
}


function fecharOverlay() {
    overlay.style.display = "none"
}

function imprimirTicket() {
    window.print()
}

