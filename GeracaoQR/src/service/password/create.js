import handle from "./handle.js"

async function createPassword() {
    console.log(("Escolheu o gerador de password"))
    console.log("The password is:")
    console.log(process.env.UPPERCASE_LETTERS)
    const password =await handle()
    console.log(password)
}


export default createPassword