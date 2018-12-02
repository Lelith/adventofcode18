const fs = require('fs');

function modData(data) {
  const formatData = data.split('\n').map(item => item.trim());
  return formatData;
}

function findDiffIndex(left, right) {
  left = left.split('');
  right = right.split('');

  let diffCounter = 0;
  let diffIndex = -1;
  let idx = 0;

  while (diffCounter < 3 && idx < left.length) {
    if (left[idx] !== right[idx]) {
      diffIndex = idx;
      diffCounter += 1;
    }
    idx += 1;
  }
  return diffCounter === 1 ? diffIndex : -1;
}


function findSibling(data) {
  console.log('Find sibling');
  let siblingFound = false;
  let diffIndex = -1;
  let idx = 0;
  const siblings = {
    match: '',
    diffIndex: -1,
  };

  while (!siblingFound && idx < data.length) {
    let j = idx + 1;
    while (!siblingFound && j < data.length) {
      diffIndex = findDiffIndex(data[idx], data[j]);
      if (diffIndex > -1) {
        siblingFound = true;
        siblings.match = data[idx];
        siblings.diffIndex = diffIndex;
      }
      j += 1;
    }
    idx += 1;
  }
  return siblings;
}

function serializeId(siblings) {
  console.log(siblings);
  const { diffIndex, match } = siblings;
  const sibling = match.split('');
  sibling.splice(diffIndex, 1);
  const result = sibling.join('');
  return result;
}


try {
  let data = fs.readFileSync('input.txt', 'utf8');
  data = modData(data);
  const siblings = findSibling(data);
  const result = serializeId(siblings);
  console.log(`${result}`);
} catch (e) {
  console.log('Error:', e.stack);
}
