function add(a: number, b: number): number {
  return a + b;
}

let num1 = parseFloat("1");
let num2 = 2;

if(isNaN(num1) || isNaN(num2)){
    console.error("Invalid input: Arguments must be numbers");
} else {
    let result = add(num1, num2); // Corrected: Now passes numbers
    console.log(result); // Output: 3
}

//Alternative solution using type assertion (less safe):
// let result = add(parseFloat("1") as number, 2); 