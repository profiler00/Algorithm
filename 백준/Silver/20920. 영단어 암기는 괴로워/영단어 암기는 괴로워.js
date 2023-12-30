const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b] = input[0].split(" ").map((x) => parseInt(x));
const words = new Map();

for (let i = 0; i < a; i++) {
  const str = input[i + 1].trim();
  if (str.length >= b) {
    words.set(str, (words.get(str) || 0) + 1);
  }
}

const sortedWords = [...words.keys()].sort((a, b) => {
  const countA = words.get(a);
  const countB = words.get(b);

  if (countA !== countB) {
    return countB - countA;
  }

  if (a.length !== b.length) {
    return b.length - a.length;
  }

  return a.localeCompare(b);
});

console.log(sortedWords.join("\n"));