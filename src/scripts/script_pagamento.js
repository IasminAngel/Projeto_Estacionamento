const ticket = document.getElementById("confirmar")
const overlay = document.getElementById("overlay")
const conteudo = document.getElementById("conteudo")

ticket.onclick(abrirTicket())

function abrirTicket(){
    overlay.style.display = "block"  
    conteudo.style.display = "block"
    
}
