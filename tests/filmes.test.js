const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());

let filmes;

beforeEach(() => {
  filmes = [
    { id: 1, titulo: "O Senhor dos Anéis", ano: 2001 },
    { id: 2, titulo: "Matrix", ano: 1999 },
  ];

  app.delete("/api/filmes/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = filmes.findIndex(f => f.id === id);

    if (index === -1) {
      return res.status(404).json({ mensagem: "Filme não encontrado" });
    }

    filmes.splice(index, 1);
    return res.status(204).send();
  });
});

test("DELETE /api/filmes/1 deve remover filme existente e retornar 204", async () => {
  const res = await request(app).delete("/api/filmes/1");
  expect(res.status).toBe(204);
  expect(filmes.length).toBe(1);
});

test("DELETE /api/filmes/999 deve retornar 404", async () => {
  const res = await request(app).delete("/api/filmes/999");
  expect(res.status).toBe(404);
});
