async function connectToDataBase(user, password) {

    if (user == process.env.USERDATABASE && password == process.env.USERPASSWORD) {
        console.log("Ola", user)
    } else {
        console.log("Aconteceu um erro ao intentar accesar no Banco.")
    }
}
export default connectToDataBase