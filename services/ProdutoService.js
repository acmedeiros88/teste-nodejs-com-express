import repo from "../repositories/ProdutoRepository.js";

const produtoService = {
    findAll() {
        return repo;
    },

    findAllActive(param) {
        const produtosAtivo = repo.filter(produto => produto.ativo);
        if (param.sort) {
            if (param.sort.includes('quantidade')) {
                return produtosAtivo.sort((a, b) => b.quantidade - a.quantidade);
            } else if (param.sort.includes('nome')) {
                return produtosAtivo.sort((a, b) => a.nome_produto.localeCompare(b.nome_produto));
            }
        } else if (param.tipo) {
            if (param.tipo.includes('periferico')) {
                return produtosAtivo.sort((a => a.tipo == "periferico" ? -1 : 1));
            }
        }
        return produtosAtivo;
    },

};
export default produtoService;