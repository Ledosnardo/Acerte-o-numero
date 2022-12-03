const menorValor = 0;
const maiorValor = 1000;
const mostrarMenorValor = document.getElementById("menor-valor");
const mostrarMaiorValor =document.getElementById("maior-valor");

mostrarMenorValor.innerHTML = menorValor;
mostrarMaiorValor.innerHTML = maiorValor;


const numeroSecreto = sortearNumero();

function sortearNumero() {
    const numero = parseInt(Math.random() * (maiorValor - menorValor) + menorValor);
    return numero;
}

console.log(numeroSecreto);



