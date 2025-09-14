const express = require("express");
const app = express();
const port = 8080;

let filmes = [
  { id: 1, titulo: "O Senhor dos Anéis", ano: 2001 },
  { id: 2, titulo: "Matrix", ano: 1999 },
];

app.get("/api/filmes", (req, res) => {
  res.json(filmes);
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
