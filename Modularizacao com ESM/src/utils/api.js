// Pode ser do seguente jeito tendo em conta que tem que ser armacenada em uma constante
// Isso é um exemplo de importacao direita
export const key = {
    value: "123456789",
    permission: "admin",
}

// Isso é um exemplo de importacao direita
export const getApi = (key) => {
    console.log(`Api com a seguente data: \nvalue = ${key.value}\npermission: ${key.permission}`)
}


console.log(getApi(key));