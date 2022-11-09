function verificaChute(chute){
    const numero = +chute

    if (chuteInvalido(numero)){
        if (chute === 'game over'){
            document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

        }else {
            elementoChute.innerHTML +=  '<div> Valor inválido </div>'
        }
    }

    if (chuteForaLimite(numero)){
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor} </div>`
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numero}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i> </div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}
function chuteForaLimite(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})