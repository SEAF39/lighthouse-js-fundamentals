function merge(array1, array2) {
  let combined = array1.concat(array2);
  let newArray = [];

  for (let value of combined) {
    if (typeof value == 'number') {
      newArray.push(value);
    }
  }

  return newArray.sort();
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));