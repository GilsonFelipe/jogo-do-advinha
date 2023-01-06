import { conectaAPI } from "./conectApi.js";
// import additens from "./mostrarProdutos.js"

async function buscarProd(evento) {
    evento.preventDefault()
    const dados = document.querySelector("[data-pesquisa").value
    const busca = await conectaAPI.buscarProd(dados)

    const lista = document.querySelector("[data-lista]")

  while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(
        additens(element.nome, element.dica1, element.dica2, element.dica3, element.id)));
}