// -----------Method 1 mapping------------
//Array items multiple by 2

Array = [1, 2, 3, 5, 6, 7, 8, 9, 10];

console.log(Array.map((item) => item * 2));

//-------------- Function Method 2 mapping--------------
//Array items multiple by 2

Array = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const myArray = Array.map(NewFunction);

function NewFunction(num) {
  return num * 2;
}
console.log(myArray);

// ----------Find Even number-----------
Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = Array.filter((num) => num % 2 == 0);

console.log(evenNumbers);

// --------find ODD Number --------

const oddnumber = Array.filter((num) => num % 2 !== 0);
console.log(oddnumber);

// --------find Prime Numbers --------

const primeNummbers = Array.filter(
  (num) => !(num % 2 === 0) && num % 1 === 0 && num % num === 0
);
console.log(primeNummbers);
