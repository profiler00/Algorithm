const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);

const stack = [];
const result = [];

for (let i = 1; i <= a; i++) {
  const [command, value] = input[i].split(" ").map((x) => parseInt(x));

  switch (command) {
    case 1:
      stack.push(parseInt(value));
      break;
    case 2:
      if (stack.length > 0) {
        result.push(stack.pop());
      } else {
        result.push(-1);
      }
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      result.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      if (stack.length > 0) {
        result.push(stack[stack.length - 1]);
      } else {
        result.push(-1);
      }
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));