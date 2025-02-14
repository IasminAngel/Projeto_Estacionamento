const ticket = document.getElementById("Confirmar");
const overlay = document.getElementById("overlay");
const conteudo = document.getElementById("conteudo");
const op_pagamento = document.getElementById("forma_pagamento");
const pagamento = document.getElementById("pagamento");
const fechar = document.getElementById("fechar")
const imprimir = document.getElementById("imprimir")

overlay.style.display = "none";
console.log("Overlay encontrado:", overlay);

imprimir.onclick = imprimirTicket;
fechar.onclick = fecharOverlay;
ticket.onclick = function(event) {
    event.preventDefault();
    console.log("Abeindo o overlay");

    overlay.style.display = "block";
  
      

pagamento.innerText = op_pagamento.value;
}


function fecharOverlay() {
    overlay.style.display = "none"
}

function imprimirTicket() {
    window.print()
}
