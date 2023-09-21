function media(vetor) {
    let media = 0
    let soma = 0

    for (let i = 0; i < vetor.length; i++ ) {
        soma += vetor[i]
    }

    media = (soma/vetor.length).toFixed(2)

    return media
}

function menor(vetor) {
    const min = Math.min(...vetor)

    return min
}

function maior(vetor) {
    const max = Math.max(...vetor)

    return max
}



export { media,menor,maior }

