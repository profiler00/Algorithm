const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  let num = parseInt(input[i]);

  while (!isPrime(num)) {
    num++;
  }

  console.log(num);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}