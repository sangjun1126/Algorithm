const [a,b,c] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);

if (a+b+c !== 180) {
    console.log('Error');
} else {
    if (a === b) {
        if (a === c) {
            console.log('Equilateral')
        } else {
            console.log('Isosceles');
        }
    } else {
        if (a === c || b === c) {
            console.log('Isosceles');
        } else {
            console.log('Scalene')
        }
    }
}