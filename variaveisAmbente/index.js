
import connectToDataBase from "./database/connect.js";

async function main() {
    await connectToDataBase("Alex", "123")
}
main()