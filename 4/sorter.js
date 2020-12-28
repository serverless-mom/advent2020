var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n\n");

//console.log(inputArray[1])
let passCount = 0
for (i in inputArray) {
    const testRow = inputArray[i];
    if (testRow.match('byr:') && testRow.match('iyr:') && testRow.match('eyr:') && testRow.match('hgt:') && testRow.match('hcl:') && testRow.match('ecl:') && testRow.match('pid:')) {
        passCount++
    } else {
        //console.log('fail')
    }
}
console.log(passCount)