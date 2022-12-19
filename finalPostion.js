// X Marks the perfect shot

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  let location = [0, 0];
  for (const direction of moves) {
    if (direction === "north") {
      location[1] += 1;
    } else if (direction === "south") {
      location[1] -= 1;
    } else if (direction === "west") {
      location[0] -= 1;
    } else if (direction === "east") {
      location[0] += 1;
    }
  }
  return location;
}

console.log(finalPosition(moves));
// finalPosition function return to the array: [-1, 4]