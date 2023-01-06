import { conectaAPI } from "./conectApi.js";

const listaAPI = await conectaAPI.listaDeItens()

const maiorValor = listaAPI.length
const numeroSecreto = gerarNumeroAleatorio()
const nomeCerto = listaAPI[numeroSecreto].nome
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')
const elementoOutroValor = document.getElementById('outro-valor')
const faleAlgo = document.getElementById('tDicas')
const microfone = document.getElementById('microfone')

faleAlgo.innerHTML = 'FALE ALGO'

recognition.lang = 'pt-Br'

elementoMenorValor.innerHTML = listaAPI[numeroSecreto].dica1


function gerarNumeroAleatorio() {
    let NumeroAL = parseInt(Math.random() * maiorValor )
    return NumeroAL
}



async function verificaSeOChutePossuiUmValorValido(chute) {
    if (chute == nomeCerto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>A palavra secreta era <span class="certa">${nomeCerto}</span></h3>
            <button class="jogarNv" onClick="window.location.reload()" id="jogarNvm" type="button">Jogar Novamente</button>`
    }

}

microfone.addEventListener('click', () => {
    microfone.style.color = '#FF2E63' 
    recognition.start()
    
})


recognition.addEventListener('result', onSpeak)
function onSpeak(e) {
    const chute = e.results[0][0].transcript
    contagem = contagem + 1
    addDicas(contagem)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

recognition.addEventListener('end', () => {
    microfone.style.color = ' #EAEAEA' 
    
    
})


function addDicas(numero){

    
    if (numero === 1) {
        elementoMaiorValor.innerHTML = listaAPI[numeroSecreto].dica2
    }
    if (numero >= 2) {
        elementoOutroValor.innerHTML = listaAPI[numeroSecreto].dica3
    }
}

