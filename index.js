const bcrypt = require('bcrypt');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const hash = await bcrypt.hash(Date.now().toString(), 1);
  res.json({ hash });
});

app.listen(process.env.PORT || 80, () => console.log('Funcionando!'));
