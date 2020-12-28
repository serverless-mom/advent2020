var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n");


let treesHit = 0
for (i in inputArray) {
    const testRow = inputArray[i];
    const targetColumn = (i * 7) % 31;
    //console.log (testRow.charAt(targetColumn));
    if (testRow.charAt(targetColumn).match('#')){
    //    treesHit ++
    }
   // console.log(treesHit);


}
treesHit = 0
columnTracker = 0
for (i = 0; i < inputArray.length; i+=2) {
    const testRow = inputArray[i];
    const targetColumn = (columnTracker * 1) % 31;
    console.log(testRow)
    console.log (testRow.charAt(targetColumn));
    if (testRow.charAt(targetColumn).match('#')){
        treesHit ++
    }
    columnTracker ++;
    console.log(treesHit);
  }