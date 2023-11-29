const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let [hour, min] = input[0].split(' ').map(x => parseInt(x));

if (hour > 0 && min - 45 < 0) {
    hour = parseInt(hour - 1);
    min = parseInt(60 + min - 45);
} else if (hour > 0 && min - 45 >= 0) {
    min = parseInt(min - 45)
} else if (hour === 0 && min - 45 < 0) {
    hour = parseInt(hour + 23);
    min = parseInt(60 + min - 45)
} else if (hour === 0 && min - 45 >= 0) {
    min = parseInt(min - 45)
}

console.log(hour, min);