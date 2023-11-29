const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(x => parseInt(x));

if (a > b) {
    console.log('>');
} else if (a < b) {
    console.log('<');
} else if (a === b) {
    console.log('==');
}