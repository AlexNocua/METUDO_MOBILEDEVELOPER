
const mainPrompt = {
    name: "select",
    description: "Escolha a ferramenta para deu uso.\n1. Gerador de password\n2. Gerador QR",
    pattern: /^[1-2]+$/,
    message: "Escolha uma das dosi opcoes"
    ,
    required: true
}

export default mainPrompt