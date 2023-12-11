const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const a = parseInt(input[0]);
const students = input[1].split(" ").map((x) => parseInt(x));

function checkOrder(a, students) {
  let order = 1;
  let stack = [];

  for (let i = 0; i < a; i++) {
    while (stack.length > 0 && stack[stack.length - 1] === order) {
      stack.pop();
      order++;
    }

    if (students[i] === order) {
      order++;
    } else {
      stack.push(students[i]);
    }
  }

  while (stack.length > 0 && stack[stack.length - 1] === order) {
    stack.pop();
    order++;
  }

  return order === a + 1 ? "Nice" : "Sad";
}

console.log(checkOrder(a, students));
