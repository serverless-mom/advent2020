var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n").map(
    x => {
        const numberReg = /\d+/g;
        const rangeArray = x.match(numberReg);
        const targetReg = /.:/g;
        const target = x.match(targetReg)[0].charAt(0);
        const stringReg = /:.+/g;
        const stringVal = x.match(stringReg)[0].slice(2);
        return { min: parseInt(rangeArray[0]), max: parseInt(rangeArray[1]), target: target, pass: stringVal }
    }
);

let checkCount = inputArray.length
let passingCount = 0 //accumulator for passing passwords
//solution to part 1
for (i in inputArray) {
    const testObj = inputArray[i];
    //console.log(testObj)
    const testReg = new RegExp(testObj.target, 'g')
    let matchCount = 0 //count of matches defaults to 0, no bl**dy 'nil'
    const match = testObj.pass.match(testReg)
    if (match) {
        matchCount = match.length
    }
    console.log(matchCount);
    if (matchCount >= testObj.min && matchCount <= testObj.max) {
        passingCount++;
        //console.log('passing! ')
        //console.log(testObj)
    } else {
        //console.log('failing! ')
        //console.log(testObj)
    }
    if (i == 999) {
        console.log('here is how many passwords were valid');
        console.log(passingCount);
    }
}

//solution to part 2
let part2PassingCount = 0
for (i in inputArray) {
    const testObj = inputArray[i];
    //console.log(testObj)

    let matchChar1 = false
    let matchChar2 = false
    matchChar1 = (testObj.pass.charAt(testObj.max - 1) === testObj.target)
    matchChar2 = (testObj.pass.charAt(testObj.min - 1) === testObj.target)
    if ((matchChar1 && !matchChar2) || (!matchChar1 && matchChar2)) {
        part2PassingCount++
        console.log('passing!')
        console.log(testObj)
    }



    if (i == 999) {
        console.log('here is how many passwords were valid for part 2');
        console.log(part2PassingCount);
    }

    //console.log(matchCount)
    //todo: compare matchcount to min and max, create global accumulators and bake for 10 minutes

}