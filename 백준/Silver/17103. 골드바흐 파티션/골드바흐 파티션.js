const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();

let number = input.map((x) => parseInt(x));
let answer = [];

let max_num = Math.max(...number);
let sleve = Array.from({ length: max_num + 1 }, () => true);

sleve[0] = false;
sleve[1] = false;

for (let i = 2; i <= Math.sqrt(max_num); i++) {
  if (sleve[i]) {
    for (let j = 2; j <= max_num / i; j++) {
      sleve[i * j] = false;
    }
  }
}

for (let x of number) {
  let count = 0;
  for (let i = 2; i <= x / 2; i++) {
    if (sleve[i] && sleve[x - i]) count++;
  }
  answer.push(count);
}
console.log(answer.join("\n"));