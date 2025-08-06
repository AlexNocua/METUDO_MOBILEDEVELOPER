import classProduct from "../service/item.js"

const list = []
list.u



async function addItem(userCar, productToAdd) {
    const product = new classProduct(productToAdd[0], productToAdd[1], productToAdd[2])
    userCar.push(product)
    console.log(product.showProduct())
}
async function deleteItem(userCar, index) {
    console.log("The product whith ID ", index, " has delete.")
    userCar.splice(index - 1, 1)

}

async function removeItem(userCar, index) {
    const product = userCar[parseInt(index[0] - 1)]
    userCar[parseInt(index[0] - 1)].quanty = index[1]
    console.log(userCar)
    console.log("Your product is: ", product)
}

async function calculateTotal(userCar) {
    let sum = 0
    for (let index in userCar) {
        sum += parseInt(userCar[index].price)
        // console.log(sum, "Summmmmmmmmm")
        // console.log(`${parseInt(index) + 1}. `, userCar[index])
    }
    console.log("This is the total value: ", sum)

}
async function showItems(userCar) {
    console.log("This is the products list:")
    for (let index in userCar) {
        console.log(`${parseInt(index) + 1}. `, userCar[index])
    }
}

export default { addItem, deleteItem, removeItem, calculateTotal, showItems }