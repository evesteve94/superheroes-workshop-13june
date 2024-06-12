import express from "express";
import cors from "cors";
import superheroesRouter from "./Routers/superheroesRouter.js"
import { connectDB } from "./utils/db.js";

const app = express();

const PORT = 3011;

//middleware för ejs med två parametrar
app.set("view engine", "ejs");
app.use(express.json())
app.use(cors());

//serve static files
app.use(express.static('public'));

app.use("/api/superheroes", superheroesRouter);

//kör db
connectDB();


//uppgift 1
app.get("/", (_request, _response) => {
    // render istället för send | file | object 
    _response.status(200).render("home", {title : "Hello EJS"})
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})