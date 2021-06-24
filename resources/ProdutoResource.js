import express from "express";
import service from "../services/ProdutoService.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json(service.findAll());
});

router.get("/ativo", (req, res) => {
    res.status(200).json(service.findAllActive(req.query));
});

export default router;