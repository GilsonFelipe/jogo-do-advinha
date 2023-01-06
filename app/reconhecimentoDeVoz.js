

const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

let contagem = 0
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div class="voceDisse">Você disse</div>
        <span class="box">${chute}</span>
     `
}



