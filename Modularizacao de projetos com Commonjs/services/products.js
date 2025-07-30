const product = require("./product")


async function getNameProduct(idProduct, nameProduct) {
    return idProduct + " -- " + nameProduct
}

async function createProduct() {
    return new product.Product("Car", 1.2, 3, 1234)
}

// exportar um arquivo
module.exports = {
    getNameProduct,
    createProduct
}