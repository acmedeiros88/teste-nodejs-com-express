import nodemon from "nodemon";
import repo from "../repositories/ProdutoRepository.js";

const produtoService = {
    findAll() {
        return repo;
    },

    findAllActive(params) {
        const produtosAtivo = repo.filter(produto => produto.ativo);
        if (params.sort) {
            if (params.sort.includes('quantidade')) {
                return produtosAtivo.sort((a, b) => b.quantidade - a.quantidade);
            } else if (params.sort.includes('nome')) {
                return produtosAtivo.sort((a, b) => a.nome_produto.localeCompare(b.nome_produto));
            }
        } else if (params.tipo) {
            if (params.tipo.includes('periferico')) {
                return produtosAtivo.sort((a => a.tipo == "periferico" ? -1 : 1));
            }
        }
        return produtosAtivo;
    },

};

export default produtoService;