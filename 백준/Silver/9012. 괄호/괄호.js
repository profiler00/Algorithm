const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const arr = input.slice(1);

for (let i = 0; i < a; i++) {
  const stack = [];
  const str = arr[i].split("");
  let result = "YES";

  for (let j = 0; j < str.length; j++) {
    if (str[j] === "(") {
      stack.push(str[j]);
    } else {
      if (stack.length === 0) {
        result = "NO";
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }

  console.log(result);
}