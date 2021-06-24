<h1>Teste utilizando Node.js e Express no back-end</h1>

<p align="justify">Utilizando Node.js e Express retorne uma lista dos produtos com os seguintes
atributos: nome_produto, quantidade, tipo e ativo, os produtos devem ser lidos a
partir do arquivo: produtos.json.</p>
<br/>

<dl>
<dt>Requisitos funcionais:</dt>	
<dd>Devem ser listados somentes os produtos ativos;</dd>
<dd>Fazer uma rota que ordena todos produtos por: quantidade (decrescente);</dd>
<dd>Fazer uma rota que ordena todos produtos por: nome_produto (ordem alfabética);</dd>
<dd>Fazer uma rota que ordena todos produtos por tipo: “periferico”.</dd>
</dl>
<br/>
<h4>Front-End em React (Opcional, Não obrigatório mas importante)</h4>

<p>Fazer uma tabela onde listará os produtos a partir da rota de ordenação por quantidade (decrescente) da API (Back-End).</p>
<br/>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/).

### Rodando o Back-End (servidor)

```bash
# Abre o terminal/cmd na pasta do projeto

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/produtos>
```
### REST API

#### GET lista de produtos
```
http://localhost:3000/produtos
```

#### GET lista de produtos ativo ordenado por: quantidade (decrescente)
```
http://localhost:3000/produtos/ativo?sort=quantidade
```

#### GET lista de produtos ativo ordenado por: nome_produto (ordem alfabética)
```
http://localhost:3000/produtos/ativo?sort=nome
```

#### GET lista de produtos ativo ordenado por: tipo="periferico"
```
http://localhost:3000/produtos/ativo?tipo=periferico
```
