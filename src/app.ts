import express from "express";
import "reflect-metadata"
import { DataSource } from "typeorm";


const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello From Express')
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm_db"
});

AppDataSource.initialize().then(()=>{
    console.log("Connected Successfully.....")
}).catch((err)=>{
    console.log(err);
});

app.listen(port, ()=>{
    console.log(`App Runnig On Port: ${port}`)
})