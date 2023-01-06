async function listaDeItens() {
    const conexao = await fetch("https://json-server-one-self.vercel.app/advinha")
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}
async function criarItens(nome, dica1, dica2, dica3, id) {
    const conexao = await fetch("https://json-server-one-self.vercel.app/advinha", {

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            dica1: dica1,
            dica2: dica2,
            dica3: dica3,
            id: id
        })
    })



    if (!conexao.ok){
        throw new Error("Nao foi possivel")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida

}

async function buscarProd(busca) {
    const conexao = await fetch(`https://json-server-one-self.vercel.app/advinha?q=${busca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    listaDeItens,
    criarItens,
    buscarProd
}
