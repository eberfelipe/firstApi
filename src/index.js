const express = require('express');
const { authenticate } = require('./middlewares');
const studentsRouter = require('./router');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota raiz com autenticação
app.get('/', authenticate, (req, res) => {
  console.log ("Authenticated successfully!");
  res.redirect('/students');
});

// Usar o router de estudantes para tratar as rotas começando com /students
app.use('/students', studentsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
