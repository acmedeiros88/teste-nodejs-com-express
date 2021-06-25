import express from "express";
import cors from "cors";
import ProdutoResource from "./resources/ProdutoResource.js";

const server = express();
server.use(cors());
const PORT = 3001;
server.listen(PORT);

server.use("/produtos", ProdutoResource);