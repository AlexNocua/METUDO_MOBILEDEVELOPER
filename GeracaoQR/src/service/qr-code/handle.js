import qr from "qrcode-terminal"
import qrimage from "qr-image"
import fs from "fs"
import { open } from "fs"

async function handle(err, result) {
    if (err) {
        console.log("erro na aplicacao")
        return
    }
    console.log(result)
    const isSmall = result.type == 2
    if (result.type == 2) {
        const imgQR = qrimage.image(result.link, { type: "svg" })
        imgQR.pipe(fs.createWriteStream("image_qr.svg"))
    }
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log("Qr gerado")
        console.log(qrcode)
    })

}
export default handle