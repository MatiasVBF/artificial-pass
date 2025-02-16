// Inclua a biblioteca brain.js (Você pode instalar usando npm: npm install brain.js)
const brain = require('brain.js');

// Crie uma nova rede neural
const net = new brain.NeuralNetwork();

// Treine a rede neural com alguns dados de exemplo
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Teste a rede neural com um novo conjunto de dados
const output = net.run([1, 0]);

console.log(`Resultado da previsão: ${output}`);  // Deve imprimir um valor próximo a 1
