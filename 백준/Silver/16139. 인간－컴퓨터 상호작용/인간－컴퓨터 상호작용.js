const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [str, question, O] = [input[0], +input[1], []]
const l = str.length
const A = Array(26).fill().map(_ => Array(l).fill(0))

for (let i = 0; i < 26; i++)
  for (let j = 0; j < l; j++)
    A[i][j] = (A[i][j - 1] ?? 0) + +(i == str[j].charCodeAt() - 97) 
for (let i = 2; i < question + 2; i++) {
  const [a, l, r] = input[i].split(' ')
  const j = a.charCodeAt() - 97
  O.push(A[j][r] - (A[j][l - 1] ?? 0))
}

console.log(O.join('\n'))
