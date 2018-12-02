const fs = require('fs');

function modData(data) {
  const formatData = data.split('\n').map(item => parseInt(item.trim(), 10));
  return formatData;
}

function calculateResult(data) {
  let result = 0;
  const frequency = [];
  let match = false;

  while (!match) {
    for (let i = 0; i < data.length; i += 1) {
      result += data[i];
      if (frequency.includes(result)) {
        match = true;
        i = data.length;
        return result;
      }
      frequency.push(result);
    }
  }
  return result;
}

try {
  let data = fs.readFileSync('example.txt', 'utf8');
  data = modData(data);
  const result = calculateResult(data);
  console.log(result);
} catch (e) {
  console.log('Error:', e.stack);
}
