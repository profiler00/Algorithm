const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();

const set = new Set();

for (let i = 0; i < input.length; i++) {
  const [name1, name2] = input[i].split(' ')
    if (name1 === 'ChongChong' || name2 === 'ChongChong' || set.has(name1) || set.has(name2)) {
      set.add(name1)
      set.add(name2)
    }
}

console.log(set.size);