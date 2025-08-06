import rL from "readline";
import car from "./service/car.js"
// import classProduct from "./service/item.js"

const item = []



//Procesado da consola
const readLine = rL.createInterface({
    input: process.stdin,
    output: process.stdout
})


function logicCar() {
    console.log("Welcome to Shopee.")
    function menu() {
        car.calculateTotal(item)
        readLine.question("\n Please, Enter one of these options\n\n1.Add Products.\n2.Remove quanty\n3.Delete Products\n4.Show product List.\n", (input) => {
            switch (input) {
                case "1":
                    console.log("Creating a product: ")
                    readLine.question("Pleace enter the name, price and quanty of your product:", (input) => {
                        console.log("Information of product added:", input)
                        let value = (input.trim().split(" "))
                        car.addItem(item, value)
                        menu()
                    })
                    break

                case "2":
                    car.showItems(item)
                    readLine.question("Enter your ID product to edit and attribute value: ", (input) => {
                        let value = input.trim().split(" ")
                        car.removeItem(item, value)
                        menu()
                    })
                    break
                case "3":

                    readLine.question("Enter the ID Product to Delete:", (value) => {
                        car.deleteItem(item, parseInt(value))
                        menu()
                    })
                    break
                case "4":
                    car.showItems(item)
                    menu()
                    break
                case 0:
                    console.log("Good Bye.")
                    readLine.close()
                    break

            }


        })
    }
    menu()
}

console.log("Ola Shopee!")




logicCar()