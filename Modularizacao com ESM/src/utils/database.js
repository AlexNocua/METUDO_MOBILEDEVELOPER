

async function connectToDataBase(dataName) {
    console.log("Conectando ao banco", + dataName)
}
async function disconnetDataBase(dataName) {
    console.log("Disconnet database: " + dataName)
}

// modo de exportacao com ECMA
// export default connectToDataBase

// exportacoes multiplas, ter em conta que se eu tenho uma constante eu posso tambem agregar-la 
export default { connectToDataBase, disconnetDataBase }