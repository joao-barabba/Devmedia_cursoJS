var mes = "Abril"; //Verificador de estção do ano

switch(mes)//  Escolha (Mes) declarado na váriavel acima
{
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");// Dentros dos meses citados (Verão)
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:// Padrão  caso nenhuma condição for atendida
        console.log("Mês inválido");
        break;// Usado para parar aqui após ser atendido a condição
}