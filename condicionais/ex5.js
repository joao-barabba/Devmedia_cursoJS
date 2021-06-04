let meteoros_trimestre_um     =  "Alfa Centaurideos começa em 03/01 e termina em 05/01\nGama Normídeos começa em 17/02 e termina em 20/02\nPi Pupídeos começa em 25/03 e termina em 29/03";

let meteoros_trimestre_dois   =  "Líridas começa em 23/05 e termina em 26/05\nEta Aquáridas começa em 31/05 e termina em 02/06\nBootídeos de Junho começa em 16/06 e termina em 20/06";

let meteoros_trimestre_tres   =  "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro =  "Delta Aquáridas do Sul começa em 11/10 e termina em 15/10\nPiscis Austrinídeos começa em 04/12 e termina em 08/12\nPerseidas começa em 27/12 e termina em 31/12";

var data_atual = new Date();// Variavel que recebe a data atual pela função New Date()
var mes_atual = data_atual.getMonth();// Variavel que recebe somente o mÊs pela propriedade .getMonth
if(mes_atual<=3){
    console.log(meteoros_trimestre_um)
}else if(mes_atual<=6){
    console.log(meteoros_trimestre_dois)
}else if (mes_atual<=9){
    console.log(meteoros_trimestre_tres)
}else {
    console.log(meteoros_trimestre_quatro)
}