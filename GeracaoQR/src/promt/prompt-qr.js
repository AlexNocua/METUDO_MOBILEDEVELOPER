import chalk from "chalk";

// url : https://www.npmjs.com/package/prompt
// import prompt from "prompt"

const promptQRCode = [

    {
        name:"type",
        description: "Por favor, digite uma das dois opcoes para gerar o QR:\n1. Gerar na Consola \n2. Gerar imagem\n",
        pattern: /^[1-2]+$/,
        message: "Erro no aplicativo",
        require: true
    },
    {
        name: "link",
        description: "Por favor digite o link"
    }
]



// const promptQRCode =


// {
//     name: "type",
//     description: "Description",
//     pattern: /^[1-2]+$/,
//     message: "Erro no aplicativo",
//     require: true
// }



export default promptQRCode