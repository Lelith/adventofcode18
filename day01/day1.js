var fs = require('fs');

function modData(data) {
  const formatData = data.split("\n").map(function(item) {
    return parseInt(item.trim());
  });
  return formatData;
}

function calculateResult(data){
  let result = 0;
  data.map(x => result +=x);
  return result;
}

try {
    let data = fs.readFileSync('input1.txt', 'utf8');
    data = modData(data);
    const result = calculateResult(data);
    console.log(result);
} catch(e) {
    console.log('Error:', e.stack);
}