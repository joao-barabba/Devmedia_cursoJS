let emprestimo =3000
let taxa = 0.02 // ao mês
let contador = 1
let parcelas_totais = 5

while(contador<=parcelas_totais){
    let numero_parcela = contador
    let juros_emprestimo = emprestimo* taxa * numero_parcela

    console.log(`A taxa de juros no periodo  de ${numero_parcela} mes(es) é de R$${juros_emprestimo},00`)
    contador++
}