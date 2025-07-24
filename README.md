# 🎬 Movies API

API RESTful desenvolvida com [NestJS](https://nestjs.com/) para listar filmes e visualizar seus detalhes, usando dados mockados em arquivos JSON. Ideal para testes, protótipos ou desafios técnicos.

---
📘 Documentação Swagger
Acesse a documentação interativa em:

🔗 http://localhost:3002/docs

## 🚀 Tecnologias Utilizadas

- **Node.js** + **NestJS**
- **TypeScript**
- **Swagger** (documentação da API)
- **CORS** habilitado
- Dados mockados via arquivos `.json`

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/movies-api.git
cd movies-api
```
2. Instale as dependências:
```
npm install
```
4. Configure o ambiente:
Crie um arquivo .env na raiz do projeto:
```
PORT=3002
URL_FRONT=http://localhost:5173
```
5. Inicie o servidor
```
npm run start

```
A API estará disponível em: http://localhost:3002

🛠 Endpoints da API
GET /movies
Lista todos os filmes.
```
[
  {
    "Title": "Star Wars: Episode IV - A New Hope",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://..."
  }
]
```
GET /movies/:id
Busca um filme específico pelo imdbID.

✅ Exemplo: /movies/tt0076759

❌ 404 se não encontrado

GET /movies/:id/detail
Retorna os detalhes completos de um filme.

✅ Exemplo: /movies/tt0076759/detail

❌ 404 se não encontrado
```
{
  "Title": "Star Wars: Episode IV - A New Hope",
  "Year": "1977",
  "Director": "George Lucas",
  "Plot": "The Imperial Forces, under orders from cruel Darth Vader...",
  "Ratings": [
    { "Source": "Internet Movie Database", "Value": "8.6/10" },
    ...
  ],
  ...
}
```
## Melhorias
Testes: ainda não implementado. Pode usar Jest com os utilitários nativos do NestJS.

## 💡 Observações:
Essa API é totalmente mockada (sem banco de dados).
Pode ser facilmente estendida para usar uma fonte de dados real,
utiliza boas práticas com tipagem forte (TypeScript) e organização modular.




