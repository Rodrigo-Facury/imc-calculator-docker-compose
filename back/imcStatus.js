function statusPerImc(imc) {
  if (imc < 18.5) {
    return 'Magreza';
  }
  if (imc < 25) {
    return 'Normal';
  }
  if (imc < 30) {
    return 'Sobrepeso';
  }
  if (imc < 40) {
    return 'Obesidade';
  }

  return 'Obesidade grave';
}

module.exports = statusPerImc;
