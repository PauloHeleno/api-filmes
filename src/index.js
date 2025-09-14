const express = require("express");
const app = express();
const port = 8080;

app.use(express.json()); 

let filmes = [
  { id: 1, titulo: "O Senhor dos Anéis", ano: 2001 },
  { id: 2, titulo: "Matrix", ano: 1999 },
];

app.get("/api/filmes", (req, res) => {
  res.json(filmes);
});

app.post("/api/filmes", (req, res) => {
  const { titulo, ano } = req.body;

  if (!titulo || !ano) {
    return res.status(400).json({ erro: "Título e ano são obrigatórios" });
  }

  const novoFilme = {
    id: filmes.length + 1,
    titulo,
    ano,
  };

  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

app.listen(port, () => {
  console.log(` Servidor rodando em http://localhost:${port}`);
});
