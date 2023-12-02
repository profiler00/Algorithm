const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const num1 = input[0].split(' ').map((x) => parseInt(x));
const num2 = input[1].split(' ').map((x) => parseInt(x));

const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
}

let numerator = num1[0] * num2[1] + num1[1] * num2[0];
let denominator = num1[1] * num2[1];

const gcdNum = gcd(numerator, denominator);

console.log(numerator / gcdNum, denominator / gcdNum);