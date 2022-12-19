// iteraring over array with for

/*
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let X = 0; X < packingList.length; X++) {
  console.log(packingList[X]);
}
packingList[3];

*/

//Iterating over array with while

const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
let X = 0;
while (X < packingList.length) {
  console.log(packingList[X]);
  X++;
}