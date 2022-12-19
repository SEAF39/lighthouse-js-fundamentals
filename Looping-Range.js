function range(start, end, step) {
  let Array = [];
  if (start === undefined || end === undefined || step === undefined || start >= end || step <= 0) {
    return [];

  } else {
    for (let n = start; n <= end; n += step) {

      Array.push(n);
    }

    return Array;
  }
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));