<h1>Teste utilizando Node.js e Express no back-end</h1>

<p align="justify">Utilizando Node.js e Express retorne uma lista dos produtos com os seguintes
atributos: nome_produto, quantidade, tipo e ativo, os produtos devem ser lidos a
partir do arquivo: produtos.json.</p>
<br/>


#### Requisitos funcionais:
- Devem ser listados somentes os produtos ativos;
- Fazer uma rota que ordena todos produtos por: quantidade (decrescente);
- Fazer uma rota que ordena todos produtos por: nome_produto (ordem alfabética);
- Fazer uma rota que ordena todos produtos por tipo: “periferico”.

<br/>
#### Front-End em React (Opcional, Não obrigatório mas importante)

<p>Fazer uma tabela onde listará os produtos a partir da rota de ordenação por quantidade (decrescente) da API (Back-End).</p>
<br/>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/).

### Rodando o Back-End (servidor)

```bash
# Abre o terminal/cmd na pasta do projeto;

# Instale as dependências;
$ npm i

# Execute a aplicação;
$ npm start

# O servidor inciará na porta:3001.
```
### REST API

#### GET lista de produtos
```
http://localhost:3001/produtos
```

#### GET lista de produtos ativo ordenado por: quantidade (decrescente)
```
http://localhost:3001/produtos/ativo?sort=quantidade
```

#### GET lista de produtos ativo ordenado por: nome_produto (ordem alfabética)
```
http://localhost:3001/produtos/ativo?sort=nome
```

#### GET lista de produtos ativo ordenado por: tipo="periferico"
```
http://localhost:3001/produtos/ativo?tipo=periferico
```

### Tecnologias

As seguintes ferramentas foram usadas na construção deste teste:

- [Node.js v14 LTS (14.17.1)](https://nodejs.org/en/)
- [Express v4 (4.17.1)](https://expressjs.com/)
- [nodemon v2 (2.0.7)](https://npmjs.com/package/nodemon)
- [CORS v2 (2.8.5)](https://expressjs.com/en/resources/middleware/cors.html)