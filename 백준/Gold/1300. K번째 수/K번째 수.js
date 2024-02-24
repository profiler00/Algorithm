let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [n, k] = input.map(x => +x);

let left = 1;
let right = k;

while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = 0;
    
    for (let i = 1; i <= n; i++) {
        cnt += Math.min(Math.floor(mid / i), n);
    }
    
    if (cnt < k) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(left);
