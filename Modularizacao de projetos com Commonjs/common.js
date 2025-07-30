// importar a funcao do nosso produto
// mas nessa funcao troze tudas as funcoes que estejam no nosso codigo
const p = require("./services/products")
const padrao = require("./services/expPadrao")

// Aqui um exemplo de exportacao por destructuracao trazendo so funcoes especificas
const { getName } = require("./services/expDestructuring")

async function main() {
    console.log("Ola mundo, meu nome é system")

    // exemplo de outras funcoes
    console.log(
        p.getNameProduct(1, "Telephone")
    )

    // exemplo de clase de produto
    console.log(p.createProduct())


    //exemplo de exportacao padrao 
    console.log(padrao.exemploExpPadrao())


    //exemplo de destrcturacao
    console.log(getName())

}
main()

