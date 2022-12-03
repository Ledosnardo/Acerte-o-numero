function validandoResultado(chute) {
    const numero = parseInt(chute);

    if(valorInvalido(numero)) {   
        mostrarChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}`

        return
        }

    if(numeroMaiorOuMenor(numero)){
        mostrarChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}`

        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você acertou, parabéns!!!</h1>
            <h3>O número secreto era ${numeroSecreto}</h3> 
            <button id="botao">Recomeçar</button>`

        botaoRecomecar();

    } else if(numero < numeroSecreto) {
        mostrarChute.innerHTML += `<div>O Número secreto é maior que ${numero} &#8593</div>`;

    } else {
        mostrarChute.innerHTML += `<div>O Número secreto é menor que ${numero} &#8595</div>`;
        
    }

}



function valorInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function botaoRecomecar() {
    const botao = document.getElementById("botao");
    botao.addEventListener("click", () => {
      window.location.reload();
     });
}