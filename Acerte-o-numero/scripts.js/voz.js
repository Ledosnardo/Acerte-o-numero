const mostrarChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
    const chute = e.results[0][0].transcript;

    telaChute(chute);
    validandoResultado(chute);
    recomecar();

}

function telaChute(chute) {
    mostrarChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

function recomecar() {
    recognition.addEventListener("end", () => recognition.start());
}