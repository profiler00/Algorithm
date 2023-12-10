const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require("fs").readFileSync(filepath).toString().trim().split("\n");

const result = [];

for (let str of input) {
  const stack = [];
  let visited = true;
  if (str == ".") break;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "[" || str[i] == "(") {
      stack.push(str[i]);
    } else if (str[i] == "]") {
      if (stack[stack.length - 1] == "[") {
        stack.pop();
      } else {
        visited = false;
        break;
      }
    } else if (str[i] == ")") {
      if (stack[stack.length - 1] == "(") {
        stack.pop();
      } else {
        visited = false;
        break;
      }
    } else if (str[i] == ".") break;
  }
  if (stack.length > 0 || !visited) result.push("no");
  else result.push("yes");
}

console.log(result.join("\n"));