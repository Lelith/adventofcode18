const fs = require('fs');

function modData(data) {
  const formatData = data.split('\n').map(item => parseInt(item.trim(), 10));
  return formatData;
}

function calculateResult(data) {
  let result = 0;
  data.map(x => result += x);
  return result;
}

try {
  let data = fs.readFileSync('input.txt', 'utf8');
  data = modData(data);
  const result = calculateResult(data);
  console.log(result);
} catch (e) {
  console.log('Error:', e.stack);
}
