// importacao com ECMA
// Relembrar a extencao MJS nos arquivos para falar que ele é um modulo
import connectToDataBase from "./utils/database.js"

// importacao multipla
// import * as database from "./utils/database.js"
// exemplo de essa importacao
// database.connectToDataBase("my database")
// database.diiconnetDataBase("my database")


//exemplo de destructuracao
// import { connectToDataBase } from "./utils/database.js"


connectToDataBase("my-database")

console.log("ola Mundo")