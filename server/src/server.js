const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

// server.use(router);
server.get("/users", (req, res)=>{
    res.status(200).send("Aquí van todos los usuarios");
});

server.get("/user/:id", (req, res)=>{
    res.status(200).send("Detalle del Usuario");
});

server.post("/users", (req, res)=>{
    res.status(200).send("Creando Usuario");
});
module.exports = server;
