# Teste utilizando Node.js e Express no Back-End

<p align="justify">Utilizando Node.js e Express retorne uma lista dos produtos com os seguintes
atributos: nome_produto, quantidade, tipo e ativo, os produtos devem ser lidos a
partir do arquivo: produtos.json.</p>
<br/>

### Requisitos funcionais:
- Devem ser listados somentes os produtos ativos;
- Fazer uma rota que ordena todos produtos por: quantidade (decrescente);
- Fazer uma rota que ordena todos produtos por: nome_produto (ordem alfabética);
- Fazer uma rota que ordena todos produtos por tipo: “periferico”.
<br/>

### Front-End em React (Opcional, Não obrigatório mas importante)

<p>Fazer uma tabela onde listará os produtos a partir da rota de ordenação por quantidade (decrescente) da API (Back-End).</p>
<br/>

# Demonstração do teste

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:  
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Rodando o Back-End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/acmedeiros88/teste-nodejs-com-express.git

# Acesse a pasta do projeto no terminal/cmd
$ cd teste-nodejs-com-express

# Instale as dependências;
$ npm i

# Execute a aplicação;
$ npm start

# O servidor inciará na porta:3001 - acesse <http://localhost:3001/produtos>  
```

### API Produtos

#### Listar todos os produtos
```
GET /produtos
```

#### Listar todos os produtos ativo ordenado por: quantidade (decrescente)
```
GET /produtos/ativo?sort=quantidade:desc
```

#### Listar todos os produtos ativo ordenado por: nome_produto (ordem alfabética)
```
GET /produtos/ativo?sort=nome
```

#### Listar todos os produtos ativo ordenado por: tipo="periferico"
```
GET /produtos/ativo?tipo=periferico
```

### Rodando a aplicação web (Front-End)

```bash
# Clone este repositório
$ git clone https://github.com/acmedeiros88/teste-front-end-react.git

# Acesse a pasta do projeto no terminal/cmd
$ cd teste-front-end-react

# Instale as dependências;
$ npm i

# Execute a aplicação;
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>  
```

### Tecnologias

As seguintes ferramentas foram usadas na construção deste teste:

- [Node.js v14 LTS (14.17.1)](https://nodejs.org/en/)
- [Express v4 (4.17.1)](https://expressjs.com/)
- [nodemon v2 (2.0.7)](https://npmjs.com/package/nodemon)
- [CORS v2 (2.8.5)](https://expressjs.com/en/resources/middleware/cors.html)
