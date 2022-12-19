// Age Calculator
function ageCalculator (name, yearOfBirthday, currentYear) {
  let age = 0;
  let ageprint = "";
  age = currentYear - yearOfBirthday;
  ageprint = name + " is " + age + " years old.";
  return ageprint;
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
