const fs = require('fs');

function modData(data) {
  const formatData = data.split('\n').map(item => item.trim());
  return formatData;
}
function findDupes(data) {
  const dupes = {
    twins: 0,
    triplets: 0,
  };

  data.map((boxId) => {
    boxId = (boxId.split('')).sort();
    let tripletFound = false;
    let twinFound = false;
    let i = 0;
    while ((i + 2) <= boxId.length) {
      if (boxId[i] === boxId[i + 1]) {
        if (boxId[i + 1] === boxId[i + 2]) {
          if (!tripletFound) {
            dupes.triplets += 1;
            tripletFound = true;
          }
          i += 2;
        } else {
          if (!twinFound) {
            dupes.twins += 1;
            twinFound = true;
          }
          i += 1;
        }
      }
      i += 1;
    }
  });

  return dupes;
}

function buildChecksum(dupes) {
  return dupes.twins * dupes.triplets;
}

try {
  let data = fs.readFileSync('input.txt', 'utf8');
  data = modData(data);
  const dupes = findDupes(data);
  const result = buildChecksum(dupes);
  console.log(dupes);
  console.log(`result: ${result}`);
} catch (e) {
  console.log('Error:', e.stack);
}
