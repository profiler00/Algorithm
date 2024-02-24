const filepath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = parseInt(input[0]);
const sequence = input[1].split(' ').map(Number);

function lis(sequence) {
    const lisArray = [];
    lisArray.push(sequence[0]);

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] > lisArray[lisArray.length - 1]) {
            lisArray.push(sequence[i]);
        } else {
            let left = 0;
            let right = lisArray.length - 1;
            let idx = -1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (lisArray[mid] >= sequence[i]) {
                    idx = mid;
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            lisArray[idx] = sequence[i];
        }
    }

    return lisArray.length;
}

console.log(lis(sequence));