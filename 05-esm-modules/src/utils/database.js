const databaseType = {
    userType: "admin",
    typeData: "datalocal",
};

async function connectToDatabase(dataname) {
    console.log(`conectado ao banco ${dataname}`);
}

async function disconectToDatabase() {
    console.log("banco de dados desconectado");
}

export {
    connectToDatabase,
    disconectToDatabase,
    databaseType,
} ;