class Product {
    constructor(name, price, quanty) {
        this.name = name
        this.price = price
        this.quanty = quanty
    }

    showProduct() {
        return `Your product added is:\n-Name: ${this.name}\n-Price: ${this.price}\n-Quanty: ${this.quanty}`
    }
}

export default Product



