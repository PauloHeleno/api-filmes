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

app.delete("/api/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  const index = filmes.findIndex(filme => filme.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Filme não encontrado" });
  }

  filmes.splice(index, 1);

  return res.status(204).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
