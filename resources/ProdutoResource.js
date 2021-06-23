import express from "express"
import service from "../services/ProdutoService.js"

const router = express.Router();

// GET /PRODUTOS
router.get("/", (req, res) => {
    res.status(200).json(service.findAll());
});

// GET /PRODUTOS/ATIVO?SORT=QUANTIDADE:DESC
// GET /PRODUTOS/ATIVO?SORT=NOME:ASC
// GET /PRODUTOS/ATIVO?TIPO=periferico
router.get("/ativo", (req, res) => {
    res.status(200).json(service.findAllActive(req.query));
});

export default router;