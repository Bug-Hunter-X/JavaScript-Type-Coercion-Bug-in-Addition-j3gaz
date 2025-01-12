function myFunction(a, b) {
  //Explicit type conversion
  return Number(a) + Number(b);
}

console.log(myFunction(5, "5")); //Output: 10
console.log(myFunction(5, 5)); //Output: 10