const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();
recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = mostraResults(e);
    exibeChute(chute)
    verificaSeChuteVerdadeiro(chute)
}

function mostraResults(e) {
    return e.results[0][0].transcript;
}

function exibeChute(chute){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())