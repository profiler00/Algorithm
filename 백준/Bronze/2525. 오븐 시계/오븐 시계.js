const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [hour, min] = input[0].split(" ").map((x) => parseInt(x));
const time = parseInt(input[1]);

function solution(hour, min, time) {
  const totalMin = hour * 60 + min + time;
  const newHour = Math.floor(totalMin / 60) % 24;
  const newMin = totalMin % 60;
  return `${newHour} ${newMin}`;
}

console.log(solution(hour, min, time));