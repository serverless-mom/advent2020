var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n").map(x=>+x);

//given a number, we know the exact value that we're seeking within the array

for(i in inputArray) {
    const testVal = (inputArray[i]);
    //calculate its pair (2020 - number)
    const pairVal = (2020 - testVal)
    if(inputArray.indexOf(pairVal)>0){
        console.log('binomial solution')
        console.log(testVal)
    }

}



for(i in inputArray) {
    const triTestVal = (inputArray[i]);
    for(n in inputArray){
        //todo: this adds the number array[i] to array[i] which could result in a bad solution
        const triTestSum = triTestVal + inputArray[n]; 
        const targetVal = 2020 - triTestSum;
        if(inputArray.indexOf(targetVal)>0){
            console.log('trinomial solution')
            console.log(triTestVal * inputArray[n] * targetVal);
        }


    }

}