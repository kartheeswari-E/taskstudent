import express from "express";
import db from "./DB/Connect.js";
import cors from "cors";
import dotenv from "dotenv";
import StudentRoutes from "./Routes/Studentroutes.js";
// import ContactRoutes from "./Routes/Studentroutes.js";

dotenv.config();
db();

const app = express();

import bodyParser from "body-parser";


app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(cors());
const PORT = 4002;

app.get("/", function (request, response) {
  response.send("Welcome to the calender app");
});


app.use("/api", StudentRoutes);

// app.use("/api/event",ContactRoutes);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));