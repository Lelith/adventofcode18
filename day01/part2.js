var fs = require('fs');

function modData(data) {
  const formatData = data.split("\n").map(function(item) {
    return parseInt(item);
  });
  return formatData;
}

function calculateResult(data){
  let result = 0;
  let frequency = []
  let match = false;

  while(!match) {
      for(let i = 0; i < data.length; i++) {
        result +=data[i];
        if(frequency.includes(result)) {
          match = true;
          i = data.length;
          return result;
        }
        frequency.push(result);
    }
  }
}

try {
    let data = fs.readFileSync('example.txt', 'utf8');
    data = modData(data);
    const result = calculateResult(data);
    console.log(result);
} catch(e) {
    console.log('Error:', e.stack);
}
