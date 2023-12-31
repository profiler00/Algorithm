const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();

let answer = "";

function isPalindrome(str, cur, cnt) {
  const length = Math.floor(str.length / 2);
  if (cur >= length) {
    return (answer += "1" + " " + cnt + "\n");
  } else {
    if (str[cur] === str[str.length - cur - 1])
      isPalindrome(str, cur + 1, cnt + 1);
    else return (answer += "0" + " " + cnt + "\n");
  }
}

input.forEach((x) => isPalindrome(x, 0, 1));

console.log(answer);