var nota = 5 //Condicional tipo simples
var status = "";
/*if ( nota > 7 ) {
status = "Aprovado";
console.log(`Sua nota foi ${nota}, portanto você está ${status} `)
}
else {
 status = "Reprovado";
 console.log(`Sua nota foi ${nota}, portanto você está ${status} `)
}
*/
var status = nota > 7 ? console.log(`Sua nota foi ${nota}, portanto você está Aprovado `) : console.log(`Sua nota foi ${nota}, portanto você está Reprovado `); // Basicamente a mesma coisa de cima, porém menos linhas.
