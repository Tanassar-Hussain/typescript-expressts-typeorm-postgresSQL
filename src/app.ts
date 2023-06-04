import express from "express";
import "reflect-metadata"
import { DataSource } from "typeorm";
import { User } from "./entites/User";
import { Profile } from "./entites/Profile";


const app = express();
app.use(express.json());
const port = 3000;

app.get('/', async (req, res)=>{

    const userRepo = AppDataSource.getRepository(User);
    const profileRepo = AppDataSource.getRepository(Profile);
    // Find All The Record
    // const allRecord = await userRepo.find({relations: {profile: true}}); //lazy realtion 
    // const allRecord = await userRepo.find(); //eager relation define in entity where relations are made
    
    // const userFound = await userRepo.findOne({where: {id: 3}})
    //delete 
    //await userRepo.delete(1) // pass ID

    // let profile: Profile = new Profile();
    // profile.gender = "Male";
    // profile.photo = "This Is Photo";
  
    // //Insert user
    // let user: User = new User();
    // user.email = "Ali@gmail.com";
    // user.firstName = "Ali";
    // user.lastName = "Asad"
    // user.profile = profile;

    // const userInserted = await userRepo.save(user);

    //update
    // await userRepo.update(2, {firstName: "wwe" , lastName: "aew", email: "wwe@aew"});
    
    //filter Record
    //const record = await userRepo.findOne({where:{firstName: "Tanassar"}})



    //One to many - many to one


    res.json('');
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "typeorm_db",
    entities: ["src/entites/*{.ts,.js}"],
    synchronize: true,
    logging: true
});

AppDataSource.initialize().then(()=>{
    console.log("Connected Successfully.....");

    app.listen(port, ()=>{
        console.log(`App Runnig On Port: ${port}`)
    });

}).catch((err)=>{
    console.log(err);
});

