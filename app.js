import express from "express";
import produtos from "./data/produtos.json";
import ProdutoResource from "./resources/ProdutoResource.js"

const server = express();
const PORT = 3000;
server.listen(PORT);

server.use("/produtos", ProdutoResource);