let dia_semana = 0 // Considerando dia de semanas como números, Exemplo segunda = 1, terça =2...

if(dia_semana==0 || dia_semana==6){
    console.log ("Funcionamos somente de Segunda a Sexta, volte depois")
} else{
    console.log("Loja aberta, Bem-Vindo")
}


//Mesma coisa do código acima porém com menos linhas
var status_loja = (dia_semana == 0 || dia_semana == 6) ? "Funcionamos apenas de Segunda à Sexta" : "Loja aberta";

//Imprime o resultado no console
console.log(status_loja);