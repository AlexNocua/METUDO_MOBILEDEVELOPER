// // url : https://www.npmjs.com/package/prompt
import prompt from "prompt"
// url https://www.npmjs.com/package/chalk
import chalk from "chalk"
// // url:https://www.npmjs.com/package/qrcode-terminal
// import qrcode from "qrcode-terminal"
import mainPrompt from "./promt/prompt.js"
import createQRCode from "./service/qr-code/create.js"
import createPassword from "./service/password/create.js"


const message = chalk.green

// one example for use of dependency
// async function main() {
//     prompt.get(["username", "email"], (err, result) => {
//         console.log("The command-line input received:")
//         console.log("username", result.username)
//         console.log("password:", result.email)
//     })

// }

async function qr() {
    qrcode.generate("https://platzi.com/p/alex.nocua/")
}

// use for application
async function main() {
    // qr()
    prompt.get(mainPrompt, (err, result) => {
        if (result.select == 1) createPassword()
        else createQRCode()
    })
    prompt.start()

}
main()