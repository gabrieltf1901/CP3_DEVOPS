const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Exemplo de armazenamento em memória para testes iniciais
let dados_jogador_dev = [
  { id: 1, nome: 'Lionel Messi', idade: 36, time: 'Inter Miami', nacionalidade: 'Argentina', pe_dominante: 'Esquerdo' },
  { id: 2, nome: 'Cristiano Ronaldo', idade: 39, time: 'Al-Nassr', nacionalidade: 'Portugal', pe_dominante: 'Direito' },
];

// Rotas CRUD para gerenciar jogadores
app.get('/dados_jogador_dev', (req, res) => {
  res.json(dados_jogador_dev);
});

app.get('/dados_jogador_dev/:id', (req, res) => {
  const jogador = dados_jogador_dev.find(j => j.id === parseInt(req.params.id));
  if (jogador) {
    res.json(jogador);
  } else {
    res.status(404).json({ message: 'Jogador não encontrado' });
  }
});

app.post('/dados_jogador_dev', (req, res) => {
  const novoJogador = { id: dados_jogador_dev.length + 1, ...req.body };
  dados_jogador_dev.push(novoJogador);
  res.status(201).json(novoJogador);
});

app.put('/dados_jogador_dev/:id', (req, res) => {
  const index = dados_jogador_dev.findIndex(j => j.id === parseInt(req.params.id));
  if (index !== -1) {
    dados_jogador_dev[index] = { id: parseInt(req.params.id), ...req.body };
    res.json(dados_jogador_dev[index]);
  } else {
    res.status(404).json({ message: 'Jogador não encontrado' });
  }
});

app.delete('/dados_jogador_dev/:id', (req, res) => {
  const index = dados_jogador_dev.findIndex(j => j.id === parseInt(req.params.id));
  if (index !== -1) {
    const jogadorRemovido = dados_jogador_dev.splice(index, 1);
    res.json(jogadorRemovido);
  } else {
    res.status(404).json({ message: 'Jogador não encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
