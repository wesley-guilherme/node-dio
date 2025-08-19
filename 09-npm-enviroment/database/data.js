async function connectToDataBase(user, password) {
    if (
        user === process.env.USERDATABASE && 
        password === process.env.PASSWORDDATABASE)
    {
         console.log("conexão com banco de dados estabalecida");
    } else {
         console.log("Falha de login, não foi possível se conectar ao BD");
    }
}

export default connectToDataBase;