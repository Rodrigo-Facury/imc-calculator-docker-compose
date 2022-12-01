const express = require('express');
const cors = require('cors');
const statusPerImc = require('./imcStatus');

const app = express();

app.use(cors());

app.get('/calculate', (req, res) => {
  const { weight, height } = req.query;
  
  const numberWeight = Number(weight);
  const numberHeight = Number(height);
  
  const imc = Number((numberWeight / (numberHeight ** 2)).toFixed(2));
  const imcStatus = statusPerImc(imc);

  return res.status(200).json({ imc, imcStatus });
});


app.listen(3001, () => console.log('ouvindo na porta 3001'));