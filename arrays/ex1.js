let notas_bimestres = [10,9,8,7]

let total_notas = notas_bimestres.length

let soma_notas = notas_bimestres[0]+notas_bimestres[1]+notas_bimestres[2]+notas_bimestres[3]

let media = soma_notas/notas_bimestres.length

if(media>=7){
    console.log(`Sua média anual foi ${media} você está Aprovado`)
}else{
    console.log(`Sua média anual foi ${media} você está Reprovado`)
}

// Outro método usando funções e simplificando o código
function somar(t,n){
    return t+n
}
let soma = notas_bimestres.reduce(somar,0)
    media = notas_bimestres.reduce(somar,0)/notas_bimestres.length

if(media>=7){
    console.log(`Sua média anual foi ${media} você está aprovado`)
}else{
    console.log(`Sua média anual foi ${media} você está reprovado`)
}