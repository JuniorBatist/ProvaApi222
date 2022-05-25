 
 export function IngressoCinema (qtdInteiras, qtdMeia, dia, nacionalidade) { 
    let total = 0;

    if (nacionalidade == "nacional") {
        total = (qtdMeia + qtdInteiras) * 5.0;
    }
    else {
        if (dia == "quarta-feira") {
            total = (qtdMeia + qtdInteiras) * (25.5 / 2);
        }
        else {
            total = (qtdInteiras * 25.5) + (qtdMeia * 25.5 / 2);
        }
    }
    return total;
}


export function frequenciaCaracter (texto, caractere) {
    let qtd = 0;
    for (let letra of texto) {
        if (letra ==caractere)
            qtd++;
    }
    return qtd;
}


export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;
    for (let item of numeros) {
        if (item > maior)
            maior = item;
    }
    return maior;
}
