function verificaSeChuteVerdadeiro(chute){
    const numero = +chute

    if(ChuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    }

    if(valorDoNumeroPermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: o número escolhido deve estar ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você acertou</h2>
        <h3> O número secreto era ${numeroSecreto}</h3>
        <button id="botao" class="btn-botao">Jogar Novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>Tente de novo, você pode estar próximo, o número sorteado é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>Tente de novo, você pode estar próximo, número sorteado é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function ChuteInvalido(numero) {
    return Number.isNaN(numero)
}
function valorDoNumeroPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e=>{
    if(e.target.id == 'botao') {
        window.location.reload();

    }
})
