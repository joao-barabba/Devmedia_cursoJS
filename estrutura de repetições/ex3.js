let numeros = [1,2,3,4,5,6,7,8,9]
let tot_imp = 0
let tot_par = 0

let contador = 0

while(contador<numeros.length){
    if(numeros[contador] % 2 == 0){
        tot_par++
        contador++
    }else{
        tot_imp++
        contador++
    }
}

console.log(`Seu array possui ${total} de números, tem valores impares um total de ${tot_imp} e pares ${tot_par}.`)