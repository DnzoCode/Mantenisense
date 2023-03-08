const mongoose = require('mongoose');

const conn = {
    isConnected: false,
}

export async function dbConnect(){
    if(conn.isConnected) return;

    const db = await mongoose.connect(process.env.MONGODB_URL)
    conn.isConnected = db.connections[0].readyState;
    console.log(db.connection.db.databaseName);
}

mongoose.connection.on("connected", () =>{
    console.log("La base de datos se conecto correctamente")
});

mongoose.connection.on("error", (err) =>{
    console.log(err)
});