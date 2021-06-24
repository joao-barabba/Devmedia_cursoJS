let produtos =[// Exercicio para percorrer dados deste objetos usando o for
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
]

let desconto = 5

for(let contador = 0; contador < produtos.length ; contador++ ){
    let produto = produtos[contador]

    for(let propriedade in produto){
        if(propriedade=="preco") {
            let preco = propriedade
            let novo_preco = produto[preco] -desconto

            console.log(`Preço atualizado : R$ ${novo_preco},00`)
        }else{
            console.log(`${propriedade} :  ${produto[propriedade]}`)
        }
    }

    console.log("\n")
}