// // Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// //- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// //- "print": imprime um texto de saída (output), pulando linha.

// const age = gets();

// // Função para classificar clientes por faixa etária
// function classifyAgeForCredit(age) {
//     // TODO: Classifique por faixa etária
//     if (18 <= age && age <= 35) { return "Jovem" }
//     else if (36 <= age && age <= 64) { return "Adulto" }
//     else if (age >= 65) { return "Idoso" }
//     else { return "Menor de idade - sem elegibilidade" }
// }

// // Imprime o resultado
// console.log((classifyAgeForCredit(age)));



// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const monthlyMovement = gets()

// Função para classificar clientes fintech por movimentação mensal
function classifyFintechClient(monthlyMovement) {
    if (monthlyMovement >= .01 && monthlyMovement <= 2000) return "Basic"
    else if (monthlyMovement >= 2000.01 && monthlyMovement <= 8000) return "Plus"
    else if (monthlyMovement >= 8000.01 && monthlyMovement <= 25000) return "Premium"
    else return "Private"
}

// Imprime o Resultado
console.log((classifyFintechClient(monthlyMovement)));